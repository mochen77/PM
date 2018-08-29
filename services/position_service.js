const PositionDao=require("../dao/position_dao.js");

const PositionService={
    //添加职位
    add(req,res,next){
        //从请求主体中解构文本数据
        const {name,salary,city}=req.body;
        console.log(name);
        //将上传文件的logo文件名保存
        let logo="";
        if(req.file)
            logo=req.file.filename;
        //保存到数据库
        PositionDao
            .save({name,logo,salary,city})
            .then(data=>{
                res.json({res_code:1,res_error:"",res_body:data});
            })
            .catch(err=>{
                res.json({res_code:-1,res_error:err,res_body:{}})
            });
    }
}

module.exports=PositionService;