const express = require("express");

const router = express.Router();

const {registeruser, loginUser}= require("../Controllers/userController");

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/find/:userId",findUser);
    

module.exports = router; 