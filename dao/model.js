//引入mongoose
const mongoose =require("mongoose");
//连接数据库
mongoose.connect('mongodb://localhost/proj_1804');

//用户模型
const User=mongoose.model("user",{
    username:String,
    password:String,
    email:String
});

//职位模型
//...

module.exports={User};