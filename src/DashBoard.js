import React, { Component } from 'react';
import { Route , Link , Switch , Redirect } from 'react-router-dom';
import App from './App.js';
import { connect } from 'react-redux';
import { logout } from './auth.redux';
@connect((state)=>({isLog:state.auth}),{logout})
class DashBoard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    	function First(props){
				console.log(props);
				return <div>
						<h2>First</h2>
					</div>
			}
		function Sec(props){
			console.log(props);
			return <div>
			   		<h2>Sec</h2>
			    </div>
		}
		function Test(props){
			console.log(props);
			return <div>
				<h2>{props.match.params.rest}</h2>
			</div>
		}
		const log = (<div>
        		<ul>
					<li>
						<Link to="/dashBoard/">1</Link>
					</li>
					<li>
						<Link to="/dashBoard/one">2</Link>
					</li>
					<li>
						<Link to="/dashBoard/two">3</Link>
					</li>
					<li>
						<Link to="/auth">登录页</Link>
					</li>
				</ul>
					<Route component={App} path="/dashBoard/" exact>
					</Route>
					<Route component={First} path="/dashBoard/one">
					</Route>
					<Route component={Sec} path="/dashBoard/two">
					</Route>
				<button onClick={logout}>登出</button>
        	</div>
        		)
    	const noLog = (
				<Redirect to="/auth"></Redirect>
        		)
    	console.log(this.props);
        return (
        	this.props.isLog.isLog?log:noLog
        );
    }
}
export default DashBoard;
