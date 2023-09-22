const express = require("express");
const { handleRegistration } = require("./controller");
const router = express.Router();

router.get("/", handleHome);
router.get("/", handleLogin);
router.get("/", handleRegistration);

module.exports = router;
