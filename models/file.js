var fs = require("fs");


exports.getAllAlbums = function(callback){
    fs.readdir("./uploads",function(err,files){
        if(err){
            callback("没有找到uploads文件夹",null);
            return;
        }
        var allAlbums = [];
        (function iterator(i){
            if(i==files.length){
                //遍历结束
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/"+files[i],function(err,stats){
                if(err){
                    callback("uploads文件中没有"+files[i],null);
                    return;
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);

    });
}

exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir("./uploads/"+albumName,function(err,files){
        if(err){
            callback("没有"+albumName+"文件夹",null);
            return;
        }
        var allImages = [];
        (function iterator(i){
            if(i==files.length){
                //遍历结束
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/"+albumName+"/"+files[i],function(err,stats){
                if(err){
                    callback(albumName+"文件中没有"+files[i],null);
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);

    });
}

