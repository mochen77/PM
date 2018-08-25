/**
 * 登陆模态框
 */ 
function LoginModal(){
    this.createDom();
    this.addListener();
}

//登陆模态框的模板字符串
LoginModal.template=`<div class="modal fade" id="loginModal">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel">用户登录</h4>
    </div>
    <div class="modal-body">
      
      <!-- 表单引用 -->
      <form class="login-form">
          <div class="form-group">
            <label for="loginUsername">用户名</label>
            <input type="text" class="form-control" name="username" id="loginUsername" placeholder="用户名">
          </div>
          <div class="form-group input-group">
            <label for="loginPassword">密码</label>
            <input type="password" class="form-control" name="password" id="loginPassword" placeholder="密码">
          </div>
          <div class="form-group">
            <label for="loginCode">验证码</label>
            <input type="text" class="form-control" id="loginCode" placeholder="验证码">
            <span class="input-group-addon code-info">信息</span>
            <p class="help-block code-img">这是个验证码图片</p>
          </div>
        </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      <button type="button" class="btn btn-primary btn-login">登录</button>
    </div>
  </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
</div><!-- /.modal -->`;

/**
 * 原型
 */
$.extend(LoginModal.prototype,{
    //创建DOM元素并渲染
    createDom(){
       $(LoginModal.template).appendTo("body");
    },
    //注册事件监听
    addListener(){
      $("#loginCode").on("blur",this.verifyHandler);
      $(".btn-login").on("click",this.loginHandler)
    },
    //校验验证码
    verifyHandler(){
      //输入的验证码
      var code=$("#loginCode").val();
      $.getJSON("/captcha/verify",{code},(data)=>{
          if(data.res_code===1){
              $(".code-info").text("正确")
          }else{
              $(".code-info").text("错误")
          }
      })
    },
    loginHandler(){
      //获取待传到服务器的用户登录数据
      var data=$(".login-form").serialize();
      //ajax提交登录处理
      $.post("/users/login",data,(resData)=>{
        console.log(resData);
      }).done(()=>{
        $("#loginModal").modal("hide");
      }).done(()=>{
        $(".login-success").removeClass("hide").siblings(".not-login").remove();
      });
    }
});