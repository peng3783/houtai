

//初始数据 result { "login":"","username":"" }
export const reqnav = () => async function (dispatch){
    var t= new Date().getTime();
    var initnav = await $.get("/nav?t="+t,function(result){
        return result;
    })

    // console.log(initnav);
    dispatch({"type" : "INITNAV" , initnav})
}



//注册
export const regist = (username, password, checked) => async function (dispatch){
    if(checked == 0){
        return;
    }
    var registjieguo = await $.post("/doregist",{
        "username" : username,
        "password" : password
    },function(result){
        return result;
    })
    dispatch({"type" : "REGIST", registjieguo,username});
}

//登录 1 成功 ；-2 没有这个注册用户 ；-1  密码不正确
export const login = (username, password) => async function (dispatch){

    var loginjieguo = await $.post("/login",{
        "username" : username,
        "password" : password
    },function(result){
        return result;
    })
    dispatch({"type" : "LOGIN", loginjieguo,username});
}