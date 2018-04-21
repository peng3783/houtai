import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";
import { Link } from "react-router-dom";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";


class Albumchild extends React.Component{
    constructor({match}){
        super();
    }




    render(){

        return (
            <div className="container">

<p>this.props.match.params.child</p>

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            albumimages :state.reducer.albumimages,
            nowwjj :state.reducer.nowwjj,
        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Albumchild);