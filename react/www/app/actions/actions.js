

//初始数据 result { "login":"","username":"" }
export const reqnav = () => async function (dispatch){
    var t= new Date().getTime();
    var initnav = await fetch("/nav?t="+t).then((data) => {
        return data.json();
    } );

    // console.log(initnav);
    dispatch({"type" : "INITNAV" , initnav})
}
//init albumWjj = { "albums":[] } 返回的是个数组
export const albumWjj = () => async function (dispatch){
    var t= new Date().getTime();
    var albumWjj = await fetch("/showAlbumIndex?t="+t).then((data) => {
        return data.json();
    } );

    // console.log(albumWjj);
    dispatch({"type" : "INITALBUMWJJ" , albumWjj})
}

// 传进来的参数item不知道为什么不是文件夹的名字{"item":"小狗"}
// albumimages : albumname images
export const albumImages = (item) => async function (dispatch){
    // console.log(item.item);
var nowwjj = item.item;
    var t= new Date().getTime();
    var albumimages = await fetch("/album/"+nowwjj).then((data) => {
        return data.json();
    } );

    // console.log(albumimages);
    dispatch({"type" : "ALBUMIMAGES" , albumimages,nowwjj})
}


//注册
export const regist = (username, password, checked) => async function (dispatch){
    if(checked == 0){
        return;
    }
    var registjieguo = await fetch("/doregist",{
        "method" : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "username" : username,
            "password" : password
        })
    }).then((data) => {
        return data.json();
    });

    dispatch({"type" : "REGIST", registjieguo,username});
}

//登录 1 成功 ；-2 没有这个注册用户 ；-1  密码不正确
export const login = (username, password) => async function (dispatch){

    var loginjieguo = await fetch("/login",{
        "method" : "POST",
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            "username" : username,
            "password" : password
        })

    }).then((data) => {
        return data.json();
    });
    // console.log(loginjieguo);
    dispatch({"type" : "LOGIN", loginjieguo,username});
}