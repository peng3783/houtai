import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";

import Loginreact from "../components/Loginreact.js";

class Login extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Loginreact></Loginreact>
            </div>

        )
    }
}

export default connect(
    () => {
        return {

        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Login);