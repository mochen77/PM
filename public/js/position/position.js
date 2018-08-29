function Position(){
    this.addListener();
}

$.extend(Position.prototype,{
    //注册事件监听
    addListener(){
        $(".btns-add-pos").on("click",this.addPositionHandler);
    },
    //添加职位
    addPositionHandler(){
        const data=$(".add-position-form").serialize();
        // console.log(data);
        $.post("/positions/add",data,(data)=>{
            console.log(data);
        },"json");
    }
});

new Position();