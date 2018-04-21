import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";
import { Redirect } from 'react-router-dom';



class Registreact extends React.Component{
    constructor({regist,registjieguo}){
        super();
        this.state = {
            "checked" : "0"
        }
    }
    changCheck(checked){
        this.setState({
            ...this.state,
            "checked" : checked
        })
    }

    //registjiegou 为1调回主页面
    render(){
        if(this.props.registjieguo == "1"){
            return (
                <Redirect to = '/'></Redirect>
            )
        }

        return (

            <div className="container">
                    <form className="form-signin" >
                        <h2 className="form-signin-heading">欢迎注册</h2>

                            <label htmlFor="username" className="sr-only" >用户名</label>
                            <input type="text" className="form-control" ref="username" placeholder="用户名，可以是中文，不能和比人重复"/>


                            <label htmlFor="password" className="sr-only" >Password</label>
                            <input type="password" className="form-control" ref="password" placeholder="密码，至少六位"/>


                        <div className="checkbox">
                            <label>
                                <input onChange={(e) => {this.changCheck(e.target.checked)}}  type="checkbox"/> 遵守协议
                            </label>
                        </div>
                        <button type="button" className="btn btn-lg btn-primary btn-block" onClick={() => {
                            this.props.regist(this.refs.username.value,this.refs.password.value,this.state.checked)
                        }}>提交</button>

                        { this.props.registjieguo == "-1" ? <div id="alert" class="alert alert-success" role="alert">
                            用户名被占用
                        </div> : null}
                    </form >
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            registjieguo:state.reducer.registjieguo
        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Registreact);