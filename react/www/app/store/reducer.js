//zhuce:0没有注册 1成功 -1用户名被占用 -3服务器错误

const InitState = {
    "albums" : ["moren"],
    "albumimages" : ["moren"],
    "nowwjj" : "",
	"registjieguo" : "0",
	"username"	: "0",
    "loginjieguo" : "0"
}

export default (state = InitState, action) => {
	switch(action.type){
        case "INITNAV" :
            return {
                ...state,
                "loginjieguo" : action.initnav.login,
                "username"	:	action.initnav.username
            };
        case "INITALBUMWJJ" :
            return {
                ...state,
                "albums" : action.albumWjj.albums,
            };
        case "ALBUMIMAGES" :
            return {
                ...state,
                "nowwjj" : action.nowwjj,
                "albumimages" : action.albumimages.images
            };
		case "REGIST" :
			return {
				...state,
				"registjieguo" : action.registjieguo,
				"username"	:	action.username
			};
        case "LOGIN" :
            return {
                ...state,
                "loginjieguo" : action.loginjieguo,
                "username"	:	action.username
            };
		default:
			return state;
	}
}