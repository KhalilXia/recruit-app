import React, { Component } from 'react';
import {login,logout,getAction} from './auth.redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
@connect((state)=>({auth:state.auth}),{login,getAction})
class Auth extends Component {
    constructor(props) {
        super(props);
    }
	componentDidMount(){
		console.log(this.props);
		this.props.getAction();
	}
    render() {
    	const log = (
    		<Redirect to="/dashBoard"></Redirect>
    		)
    	const nolog = (
			<div>
				<h2>你的名字是{this.props.auth.user}年龄是{this.props.auth.age}</h2>
           		<span>你必须先登录！</span>
           		<button onClick={this.props.login}>登录</button>
           </div> 
    		)
        return (
           this.props.auth.isLog?log:nolog
        );
    }
}

export default Auth;
