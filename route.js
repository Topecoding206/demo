const express = require("express");
const {
  handleRegistration,
  handleHome,
  handleLogin,
  handleDashboard,
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleURLs,
  handlesLogout,
  postUser,
  getUser,
} = require("./controller");
const { isAuthenticated, isLoginAlreadyAuth } = require("./authentication");
const router = express.Router();

router.get("/", handleHome);
router.get("/dashboard", isAuthenticated, handleDashboard);
router.get("/logout", handlesLogout);
router.get("/login", isLoginAlreadyAuth, handleLogin);
router.get("/urls", isAuthenticated, handleURLs);
router.get("/registration", handleRegistration);
router.get("/:shortId", handleRedirectURL);
router.post("/urls", isAuthenticated, handleGenerateNewShortURL);
router.post("/registration", postUser);
router.post("/login", getUser);

module.exports = router;
