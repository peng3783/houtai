import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";

import { Link } from "react-router-dom";


class Nav extends React.Component{
    constructor(){
        super();
    }



    alt(a){
        switch (a){
            case "1" :
                return <ul class="nav navbar-nav navbar-right"><li><a href="javascript:">欢迎，{this.props.username}</a></li><li><a href="javascript:">个人设置</a></li></ul>;
            case "0" :
                return <ul class="nav navbar-nav navbar-right"><li><Link to="/regist"><a href="javascript:">注册</a></Link></li><li><Link to="/login"><a href="javascript:">登录</a></Link></li></ul>;
        }
    }


    render(){

        return (
            <div class="container">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Project name</a>
                        </div>
                        <div id="navbar" class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">
                                <li class="active"><Link to="/"><a href="#">Home</a></Link></li>
                                <li><Link to="/album"><a href="#">Album</a></Link></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                           {this.alt(this.props.loginjieguo)}
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            username :state.reducer.username,
            loginjieguo :state.reducer.loginjieguo

        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Nav);





