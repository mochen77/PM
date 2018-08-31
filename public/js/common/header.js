/**
 * 头部构造函数
 */ 
function Header(){
    this.createDom();
    this.createModal();
    this.addListener();
    this.load();
};

Header.template=`<div class="container">
        <nav class="navbar navbar-default navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">职位管理系统</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav" id="luminance">
                    <li class="active"><a href="/index.html">首页 <span class="sr-only">(current)</span></a></li>
                    <li><a href="/html/position.html">职位管理</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right not-login">
                    <li data-toggle="modal" data-target="#loginModal" class="link-login"><a href="#">登录</a></li>
                    <li data-toggle="modal" data-target="#registerModal" class="link-register"><a href="#">注册</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right login-success hide">
                    <li><a href="#">你好，xxx</a></li>
                    <li><a href="javascript:void(0)" class="link-logout">注销</a></li>	        
	            </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>`;

/**
 * 原型
 */
$.extend(Header.prototype,{
    //创建Dom元素并渲染
    createDom(){
        $(Header.template).appendTo("header");
    },
    //创建模态框
    createModal(){
        new LoginModal();
        new RegisterModal();
    },
    load(){
        //页面加载时要判断是否有用户登录过，有则显示用户信息及注销链接
        let user=sessionStorage.loginUser
        if(user){
            user=JSON.parse(user);
            $(".login-success")
                .removeClass("hide")
                .find("a:first").text(`你好:${user.username}`);
            $(".not-login").remove();
        }
    },
    //注册事件监听
    addListener(){
        //点击登录、注册链接
        $(".link-login,.link-register").on("click",this.genCaptchaHandler);
        //点击注销链接
        $(".link-logout").on("click",this.logoutHandler);
    },
    //生成验证码
    genCaptchaHandler(){
        $.get("/captcha/gencode",(data)=>{
            $(".code-img").html(data);
        },"text");
    },
    //注销
    logoutHandler(){
        $.getJSON("/users/logout",(data)=>{
            if(data.res_body.status){
                sessionStorage.removeItem("loginUser");
                window.location.href="/index.html";
            }
        })
    }
});

//创建头部对象实例
new Header();