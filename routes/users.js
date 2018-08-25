var express = require('express');
var router = express.Router();

/* GET users listing. */
// http://localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 用户登录 */
// http://localhost:3000/users/login
router.post("/login", function(req, res, next) {
  res.send("用户登录处理");
});

/* 用户注册 */
// http://localhost:3000/users/refister
router.post("/register", function(req, res, next) {
  res.send("用户注册处理");
});

module.exports = router;
