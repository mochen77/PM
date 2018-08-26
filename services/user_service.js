const UserDao=require("../dao/user_dao.js");

const UserService={
    login(){

    },
    //注册
    register(req, res, next){
        //获取用户注册的用户信息
        const {username,password,email}=req.body;
        //验证用户名是否已被注册
        //...
        //保存用户信息
        UserDao.save({username,password,email})
        .then((data)=>{
            res.json({res_code:1,res_error:"",res_body:data});
        })
        .catch((err)=>{
            res.json({res_code:-1,res_error:err,res_body:""});
        });
    }
};


module.exports=UserService;