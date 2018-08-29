const {Position}=require("./model.js");

const PositionDao={
    //保存职位信息
    save(positionInfo){
        return new Position(positionInfo).save();
    },
    //总记录条数
    count(){
        return Position.find().count();
    },
    //按页查找
    findByPage(page){
        //假定每页显示5条数据
        const pageSize=5;
        //查询
        return Position.find().skip((page-1)*pageSize).limit(pageSize);


        // const query=Position.find();//查询结果集
        // const count=query.count();//记录条数
        // const totalPages=Math.ceil(count/pageSize);//总页数
        // const positions= query.skip((page-1)*pageSize).limit(pageSize);//当前页
        // //返回总记录条数，总页数与当前页职位数据
        // return {count,totalPages,positions};
    },
    update(){},
    find(){},
    delete(){}
}

module.exports=PositionDao;