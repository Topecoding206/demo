const express = require("express");
const { handleRegistration, handleHome, handleLogin } = require("./controller");
const router = express.Router();

router.get("/", handleHome);
router.get("/login", handleLogin);
router.get("/registration", handleRegistration);

module.exports = router;
