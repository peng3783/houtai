import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import {createStore, combineReducers, applyMiddleware} from "redux";
import createHistory from 'history/createBrowserHistory';


import { BrowserRouter as Router,Link, Route,  Switch } from "react-router-dom";


import logger from "redux-logger";
import thunk from "redux-thunk";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

import reducer from "./store/reducer.js";

import Home from "./containers/Home.js";
import Album from "./containers/Album.js";

import Login from "./containers/Login.js";
import Regist from "./containers/Regist.js";
import Albumchild from "./components/Albumchild";




//创建store
const store = createStore(
    combineReducers({
        reducer,
        router:routerReducer
    }),
    applyMiddleware(thunk, logger, middleware));

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/album" component={Album}/>
                    <Route path="/album/:child" component={Albumchild}/>
                    <Route path="/regist" component={Regist}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/images/" component={Image} />
                    <Route path="/images/:image" component={Images} />
                </Switch>
            </Router>
        </ConnectedRouter>
    </Provider>
    ,
    document.querySelector("#app")
);

class Images extends React.Component{
    constructor({ match }){
        super();

    }


    render(){
        let wjj = this.props.match.params.image;

        return(
            <div>
                {wjj}
            </div>

        )

    }
}
class Image extends React.Component{
    constructor(){
        super();

    }


    render(){


        return(
            <div>
                Image
            </div>

        )

    }
}


