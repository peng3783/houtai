var express = require("express");
var app = express();
var router =require("./router/router.js");
var session = require("express-session");
//
// var FileStore = require('session-file-store')(session);
//
//设置session
	app.use(session({
    	    secret: 'keyboard cat',
    	    resave: false,
    	    saveUninitialized: true
	}))

//end--session



//模板引擎
app.set("view engine","ejs");
//静态文件夹
app.use(express.static("./public"));
app.use(express.static("./react/www"));
app.use(express.static("./uploads"));

//设置session
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
// }));
//end--session

//路由表

app.get("/nav",router.showNav);
//显示数据库中的歌曲信息
app.get("/music",router.showMusic);
//显示lrc文件内容
app.get("/music/:lrcName",router.showLrc);

app.get("/showAlbumIndex",router.showAlbumIndex);
app.get('/album/:albumName',router.showAlbumName);//:albumName是占位符，不通的原因是url的问题

//新建相册文件夹
app.post("/up",router.doPost);
//上传图片
app.post("/upImage",router.upImage);
app.post("/doregist",router.doRegist);
app.post("/login",router.login);

// app.get("/",router.showIndex);
// app.get("/",router.showIndex);


app.listen(3000);
// app.listen(3000,"192.168.1.122");