exports.isAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    req.isTrue = false;
    next();
  } else {
    req.isTrue = true;
    res.redirect("/login");
  }
};
exports.isLoginAlreadyAuth = (req, res, next) => {
  if (req.session && req.session.user) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};
