const express = require('express');
const router = express.Router();
const Captch=require("../services/captcha.js");

//生成验证码
router.get('/gencode', Captch.genCaptcha);

//生成验证码
router.get('/verify', Captch.verifyCaptcha);

module.exports = router;
