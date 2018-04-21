import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions.js";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";

import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";


class Album extends React.Component{
	constructor(){
		super();
    }


    componentWillMount(){
	    this.props.albumWjj();
    }



    //nowwjj 不为空就跳转到对应的now文件夹 <Redirect to = {'/album/'+this.props.nowwjj} ></Redirect>
//     if(this.props.nowwjj != ""){
//     console.log('/album/'+this.props.nowwjj);
//     return <Redirect to = '/album/小树' ></Redirect>;//跳转不过去，可以跳转回'/'
// }
	render(){

		return (
            <div className="container">
                <Nav></Nav>
                <ol className="breadcrumb">
                    <li className="active"><a href="#">相册</a></li>
                </ol>
                <div className="container">
                    <div class="row">
                        { this.props.albums.map((item, index) => {
                            return (
                                <div className="col-xs-3 col-md-3"

                                     key = {index}>
                                    <Link  to="/album/小树" >
                                        <img src="images/wjj.jpg" alt="..."/>
                                    </Link>

                                    <h4 style={{"text-align" : "center"}}

                                    >{item}</h4>
                                </div>  )
                             })
                        }
                    </div>
                </div>

                {this.props.albumimages}
                <Footer></Footer>
            </div>
       )
	}
}


export default connect(
    (state) => {
        return {
            albums :state.reducer.albums,
            nowwjj : state.reducer.nowwjj,
            albumimages : state.reducer.albumimages
        }
    },
    (dispatch) => {
        return bindActionCreators(actions, dispatch);
    })(Album);