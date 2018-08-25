# 后台管理系统

> 基于 NodeJS + Express + MongoDB 实现的后台管理系统

项目实现前后端分离开发

前端的UI界面放置在 public 目录下


编写步骤：
1、用bootstrap模板写静态页面
2、建立服务器的users的登录与注册的路由
3、在用面向对象的方法创建对象复用“头部”、“登录模态框”、“注册模态框”
3.1、实现“登录模态框”、“注册模态框”的监听“发送数据到服务器”、“关闭模态框”、“显示登录状态”
4、使用“svg-captcha”实现登录注册的“验证码”,安装模块
4.1、使用mvc的方法(大致的像mvc)分“表示层”、“业务逻辑层”、“数据访问层”的方式写。建立“services”、“dao”文件夹
    (1)在“services”里面写处理验证码的的“路由分支”，在routes里面建立一个captcha的路由实现引用→分支
    (1.1)“captcha”模拟Express骨架中的路由，搭建一个引用，并在add.js里面配置（引入路由中间件、设置资源访问目录）路由
    (2)在“services”里面建立“生成二维码”和“校验二维码”两个路由，使用“svg-captcha”的方法，取到验证码，和TXT的验证码（用于校验）
    (3)“svg-captcha”保存text的验证码时安装“express-session”插件，
            “生成二维码”的路由可以通过访问得到二维码图片
            “校验二维码”通过get请求传值，验证是否正确给出返回的JSON
5、回到“public”表示层，在index里面实现监听，点击登录、注册的时候通过ajax生成图片，并添加
6、通过失去焦点ajax当前文本的数据，验证二维码，得到JSON,判断是否正确