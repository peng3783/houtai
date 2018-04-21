var formidable = require("formidable");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");


//首页
exports.showIndex = function(req, res, next){
    //session设置的时候多了cookie:{secure:true},是的session的数据变成undefinde
    console.log("session:"+req.session.login+"---"+req.session.username);
    res.render("index",{
        "login": req.session.login ,
        "username" : req.session.username
    });
}

// 注册页面
exports.showRegist = function(req, res, next){
    res.render("regist");
}

//注册业务
exports.doRegist = function(req, res, next){
    //得到用户填写的东西
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files){
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        // console.log(username+"---"+password);
        //查询数据库中是不是有这个人

        db.find("users", { "username" : username },function(err, result){
            if(err) {
                res.send("-3");
                return;
            }
            if(result.length != 0){
                res.send("-1"); //被占用
                return;
            }
            // console.log(result.length);//==0
            //现在可以证明，用户没有被占用
            //设置md5加密
            password = md5(md5(password) + "zhou");


            db.insertOne("users", {
                "username" : username,
                "password" : password
            },function(err, result){
                if(err){
                    res.send("-3");
                    return;
                }
                //注册成功，写入session
                req.session.login = "1";
                req.session.username = username;
                // console.log(req.session.login);
                res.send("1");

            });
        });

        //保存这个人

    });
    // res.render("regist");
}










