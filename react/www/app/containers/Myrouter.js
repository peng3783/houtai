import React from "react";


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



import Navgation from '../components/Navgation.js';
import Home from '../components/Home.js';
import Login from "../containers/Login.js";
import Regist from "../containers/Regist.js";

const Myrouter = () =>(
    <Router>
     <div className="container" >
       <div >
         <Navgation></Navgation>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/company" component={Company} />
              <Route path="/xiangce/:xiangpian" component={User} />
              <Route path="/login" component={Login}/>
              <Route path="/regist" component={Regist}/>
            </Switch>
         </div>
     </div>
    </Router>
);

const About = () => <h2>About</h2>;
const Company = () => <h2>Company</h2>;
const User = ({ match }) => (
    <div>
        <h2>User: {match.params.xiangpian}</h2>
    </div>
);

export default Myrouter;


