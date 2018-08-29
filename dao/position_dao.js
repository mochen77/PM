const {Position}=require("./model.js");

const PositionDao={
    save(positionInfo){
        return new Position(positionInfo).save();
    },
    update(){},
    find(){},
    delete(){}
}

module.exports=PositionDao;