import React, { Component } from 'react';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/actions.js";

import Myrouter from './containers/Myrouter.js';

class App extends Component {
    constructor(props){
        super(props);

    }



    render() {

        return (
            <div className="App">
                <Myrouter></Myrouter>
            </div>
        );
    }
}

export default connect(
    () => {
        return {

        }
    },
    (dispatch) => {
        return bindActionCreators(actions , dispatch);
    }
)(App);