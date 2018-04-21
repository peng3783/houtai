import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";


class Home extends React.Component{
	constructor(){
		super();
    }

    componentDidMount(){

    }
	render(){

		return (
            <div className="container">
                home
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
    })(Home);