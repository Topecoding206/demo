const randomStr = require("randomstring");
const bcrypt = require("bcrypt");
const URL = require("./models/url");
const users = require("./models/user");

// view controller
exports.handleHome = (req, res) => {
  res.render("index");
};
exports.handleLogin = (req, res) => {
  res.render("login");
};
exports.handleRegistration = (req, res) => {
  res.render("registration");
};

exports.handleDashboard = async (req, res) => {
  const shortUrl = await URL.find({ createdBy: req.session.user["_id"] });
  shortUrl.default = req.isTrue;
  res.render("dashboard", { shortUrl: shortUrl });
};

exports.handleGenerateNewShortURL = async (req, res, next) => {
  try {
    const { url, description } = req.body;

    const checkURL = validateURL.isWebUri(url);
    if (!url) return res.status(400).json({ msg: "url is required" });
    if (!checkURL) return res.status(400).json({ msg: "invalid url" });
    const shortID = randomStr.generate({ length: 5, charset: "alphanumeric" });

    const finds = await URL.findOne({ redirectURL: url });
    if (finds) {
      const shortUrl = [{ ...finds }];
      shortUrl["default"] = true;
      res.render("index", { shortUrl: shortUrl });
    } else {
      await URL.create({
        shortId: shortID,
        redirectURL: url,
        description,
        createdBy: req.session.user["_id"],
      });
      const shortUrl = [{ shortId: shortID, default: true }];

      res.render("index", { shortUrl: shortUrl });
    }
  } catch (error) {
    console.log("something went wrong");
  }
};
exports.handleURLs = async (req, res) => {
  const allUrl = await URL.find({ createdBy: req.session.user["_id"] });
  res.render("urls", { allUrls: allUrl });
};

exports.handleRedirectURL = async (req, res, next) => {
  try {
    const shortId = req.params.shortId;

    const entry = await URL.findOne({
      shortId,
    });
    if (!entry) return res.redirect("/login");
    entry.totalClicks++;
    entry.save();
    res.redirect(entry.redirectURL);
  } catch (error) {
    next(error);
  }
};

//   user controller

exports.postUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await users.findOne({ email });
    if (userExist) {
      res.redirect("/login");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await users.create({
      name,
      email,
      password: hashPassword,
    });
    if (newUser) {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      res.redirect("/login");
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      res.redirect("/login");
    }
    req.session.user = user;

    res.redirect("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};

exports.handlesLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
