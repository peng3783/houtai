import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";

import Registreact from "../components/Registreact.js";

class Regist extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>

                <Registreact></Registreact>

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
	})(Regist);