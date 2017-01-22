"use strict"

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


//配置静态文件服务中间件
app.use("/public",express.static("public"));

//配置解析post请求的中间件
app.use(bodyParser.urlencoded({ extended: false }));


//配置模板引擎，使用xtpl模板引擎，但是这个模板引擎是基于xtemplate的
//所以要同时安装xtemplate和xtpl
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'xtpl');


//加载路由中间件
app.use(require('./router'));


app.listen(3000,'127.0.0.1',function(){
    console.log('listening 3000');
});