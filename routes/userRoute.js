const express = require("express");
const { test, createUser } = require("../controllers/user");
const router = express.Router();

router.get("/test", test).post("/create", createUser);

module.exports = router;
