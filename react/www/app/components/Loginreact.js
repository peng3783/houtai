import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";
import { Redirect } from 'react-router-dom';


class Loginreact extends React.Component{
    constructor({}){
        super();
    }

    alt(a){
        switch (a){
            case "-1" :
                return <div id="alert" class="alert alert-success" role="alert">密码不正确</div>;
            case "-2" :
                return <div id="alert" class="alert alert-success" role="alert">用户名不正确</div>;
        }
    }


    //registjiegou 为1调回主页面
    render(){
        if(this.props.loginjieguo == 1){
            return <Redirect to = '/'></Redirect>;
        }
        return (

            <div className="container">

                    <form className="form-signin">
                        <h2 className="form-signin-heading">欢迎登录</h2>

                            <label htmlFor="username" className="sr-only">用户名</label>
                            <input type="text" className="form-control" ref="username" placeholder="用户名"/>


                            <label htmlFor="password" className="sr-only" >Password</label>
                            <input type="password" className="form-control" ref="password" placeholder="密码"/>


                        <button type="button" className="btn btn-lg btn-primary btn-block" onClick={() => {
                            this.props.login(this.refs.username.value,this.refs.password.value)
                        }}>登录</button>
                    </form >
                    {this.alt(this.props.loginjieguo)}
            </div>
        )
    }
}


export default connect(
    (state) => {
        return {
            loginjieguo:state.reducer.loginjieguo
        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Loginreact);