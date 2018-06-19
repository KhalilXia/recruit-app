import React, {
	Component
} from 'react';
import Logo from '../../components/logo/index';
import WrappedForm from '../../components/formComp';
import {
	List,
	InputItem,
	Button,
	WhiteSpace
} from 'antd-mobile';
import {
	connect
} from 'react-redux';
import {
	login,
	toRegistrer
} from '../../redux/user.redux';
import {
	Redirect
} from 'react-router-dom';
@connect(state => state.user, {
	login,
	toRegistrer
})@WrappedForm
class Login extends Component {
	constructor(props) {
		super(props);
		this.regist = this.regist.bind(this);
		this.loginConfirm = this.loginConfirm.bind(this);
		// this.state = {
		// 	user: "",
		// 	psw: ""
		// }
	}
	regist() {
		this.props.toRegistrer();
	}
	// handleChange(key, value) {
	// 	this.setState({
	// 		[key]: value
	// 	});
	// }
	loginConfirm() {
		this.props.login(this.props.state);
	}
	render() {
		return (
			<div>
            	<Logo></Logo>
				<h2>登录页</h2>
				<List>
					<p>{this.props.msg}</p>
					{this.props.redirectTo&&this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo}></Redirect>:null}
					<InputItem onChange={(v)=>this.props.handleChange("user",v)}>
						用户
					</InputItem>
					<WhiteSpace/>
					<InputItem onChange={(v)=>this.props.handleChange("psw",v)}>
						密码
					</InputItem>
					<WhiteSpace/>
					<Button type="primary" onClick={this.loginConfirm}>
						登录
					</Button>
					<WhiteSpace/>
					<Button type="primary" onClick={this.regist}>
						注册
					</Button>
					
				</List>
            </div>
		);
	}
}

export default Login;