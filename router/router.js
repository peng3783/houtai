var formidable = require("formidable");
var path = require("path");
var db = require("../models/db.js");
var md5 = require("../models/md5.js");
var file = require("../models/file.js");
var fs = require("fs");

var loginjieguo = '0';
var loginname = '0';

//Nav
exports.showNav = function(req, res, next){
    //session设置的时候多了cookie:{secure:true},是的session的数据变成undefinde
    console.log("session:"+req.session.login+"---"+req.session.username);
    res.send({
        "login":loginjieguo ,
        "username" :loginname
    });
}
//showAlbumIndex
exports.showAlbumIndex = function(req, res, next){
    // res.send({
    //     "albums" : file.getAllAlbums()
    // });
    //node.js编程方式，使用回调保证干净
    //node.js的所有东西都是异步的，所以，内层函数不是return回来东西，而是调用高层函数提供的
    //的回调函数，把数据当做回调函数的参数来使用
    file.getAllAlbums(function(err,allAlbums){
        if(err){
            // res.send(err);
            res.send("");
            return;
        }
        res.send({
            albums:allAlbums
        });
    });
}

//显示具体 的相片文件夹
//req.params.albumName可以得到相册的名字
exports.showAlbumName = function(req, res, next){
    // console.log( "albumName"+req.params.albumName);
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    //具体业务交给model
    file.getAllImagesByAlbumName(albumName,function(err,imagesArray){
        if(err){
            res.send(err);
            return;
        }
        //images : 文件夹的相片地址；
        res.send({
            images:imagesArray,
            albumname:albumName
        });

    });
}
//新建相册文件夹
exports.doPost = function(req, res, next){
    //formidable得到表单提交的数据
    var  form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){

        file.getAllAlbums(function(err,allAlbums){
            if(err){
                // res.send(err);
                res.send("");
                return;
            }
           var arr = allAlbums.filter(function(item) {
                if(item == fields.filename){
                    return item;
                }
            });
           if(arr.length == 0){
                var filename = "./uploads/" +fields.filename;
                //新建文件夹
                fs.mkdirSync(filename);
                console.log(1);
                res.send('success');
           }else{
            
                res.send(arr);
           }
            
         });
       
    });
}
//上传图片
exports.upImage = function(req, res, next){
 //formidable得到表单提交的数据
    var  form = new formidable.IncomingForm();
//这个上传的路径是个坑，一不能下载form.parse里面，所以是在上传前定义的，要转到对应的文件夹中需要重命名；二路径不能放回上层
  form.uploadDir = path.normalize(__dirname + "/../tempup");

      form.parse(req, function(err, fields, files){
console.log(fields);
console.log(files);
        file.getAllAlbums(function(err,allAlbums){
            if(err){
                // res.send(err);
                next();
                return;
            }
         //改名
         var oldpath = files.tupian.path;
         // console.log(oldpath);
         var newpath = path.normalize(__dirname + "/../uploads/" + fields.wenjianjia + "/" + files.tupian.name);
         // console.log(newpath);
         fs.rename(oldpath, newpath, function(err){
            if(err){
                res.send("改名失败");
            }
         });
           res.send("上传成功"); 
       });
       
    });
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

            //保存这个人
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
                loginjieguo = "1";
                loginname = username;

                // console.log(req.session.login);
                res.send("1");

            });
        });

    });
}

//login
exports.login = function(req, res, next){


    //得到用户表单
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files){
        //得到表单之后做的事情
        var username = fields.username;
        var password = fields.password;
        // console.log(username+"---"+password);


        //查询数据库，看看有没有这个人
        db.find("users", { "username" : username },function(err, result){
            if(err) {
                res.send("-3");
                return;
            }
            if(result.length == 0){
                res.send("-2"); //没有这个注册用户
                return;
            }
            // console.log(result.length);//==0
            //现在可以证明，用户已经注册，对比密码
            //设置md5加密
            password = md5(md5(password) + "zhou");

            if(result[0].password == password){
                //登录成功，写入session
                req.session.login = "1";
                req.session.username = username;
                loginjieguo = "1";
                loginname = username;
                console.log(req.session.login+"login");
                console.log(req.session.username+"login");

                res.send("1");
            }else{
                res.send("-1"); //密码错误
            }
        });
    });
}


exports.showMusic = function(req, res, next){
      db.find("music", {}, function(err, result){
        if (err) {
            res.send("-3");
            return;
        }
        //返回所有音乐
        console.log(result); 
       
        res.send(result); 
    })
    
}
 //lrc文件并返回
exports.showLrc = function(req, res, next){
    //得到lrc文件的名字
    var lrcName = req.params.lrcName;
    //读取对应文件
    fs.readFile(lrcName,function(err,data){
        if(err){
            res.send("歌词读取错误！");
            return;
        }
        let str = data.toString();
        res.send(str);
    });
}











