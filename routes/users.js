const express = require('express');
const router = express.Router();
const UserService=require("../services/user_service.js");


/* 用户登录 */
// http://localhost:3000/users/login
router.post("/login", function(req, res, next) {
  res.send("用户登录处理");
});

/* 用户注册 */
// http://localhost:3000/users/refister
router.post("/register", UserService.register);

module.exports = router;
