/**
 * 构造对象
 */
function RegisterModal(){
    this.createModal();
    this.addListener();
}

/**
 * 注册页面的模板字符串
 */
RegisterModal.template=`<div class="modal fade" id="registerModal">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title">用户注册</h4>
    </div>
    <div class="modal-body">
      
      <!-- 表单引用 -->
      <form class="register-form">
          <div class="form-group">
              <label for="registerUsername">用户名</label>
              <input type="text" class="form-control" name="username" id="registerUsername" placeholder="用户名">
          </div>
          <div class="form-group">
            <label for="registerPassword">密码</label>
            <input type="password" class="form-control" name="password" id="registerPassword" placeholder="密码">
          </div>
          <div class="form-group">
              <label for="registerConfPassword">确认密码</label>
              <input type="password" class="form-control" id="registerConfPassword" placeholder="再次输入密码">
            </div>
          <div class="form-group">
              <label for="registerEmail">邮箱</label>
              <input type="email" class="form-control" name="email" id="registerEmail" placeholder="输入e-email地址">
          </div>
          <div class="form-group input-group">
			    <label for="registerCode">验证码</label>
                <input type="text" class="form-control" id="retisterCode" placeholder="验证码">
                <span class="input-group-addon code-info">信息</span>
			    <p class="help-block code-img">这是个验证码图片</p>
			</div>
        </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      <button type="button" class="btn btn-primary btn-register">注册</button>
    </div>
  </div>
</div>
</div>`;

/**
 * 渲染模板
 */

$.extend(RegisterModal.prototype,{
    createModal(){
        $(RegisterModal.template).appendTo("body");
    },
    addListener(){
        //失去焦点校验验证码
        $("#retisterCode").on("blur",this.verifyHandler);
        $(".btn-register").on("click",this.registerHandler);
    },
    //校验验证码
    verifyHandler(){
        //输入的验证码
        var code=$("#retisterCode").val();
        $.getJSON("/captcha/verify",{code},(data)=>{
            if(data.res_code===1){
                $(".code-info").text("正确")
            }else{
                $(".code-info").text("错误")
            }
        })
    },
    registerHandler(){
        var data=$(".register-form").serialize();
        console.log(data);
        $.post("/users/register",data,(resData)=>{
            console.log(resData);
        },"json").done(()=>{
            $("#registerModal").modal("hide");
        });
    }
});