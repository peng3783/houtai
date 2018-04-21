import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";

import { Link } from "react-router-dom";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";


class Home extends React.Component{
	constructor(){
		super();
    }

    componentDidMount(){
        this.props.reqnav();
    }
	render(){

		return (
            <div className="container">
                <Nav></Nav>
                <div className="jumbotron">
                    <h1>Hello,World!</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>

                <Footer></Footer>
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
    })(Home);