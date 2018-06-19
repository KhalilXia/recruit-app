import React, {
	Component
} from 'react';
import Logo from '../../components/logo/index';
import {
	List,
	InputItem,
	Button,
	WhiteSpace,
	Radio
} from 'antd-mobile';
import {
	connect
} from 'react-redux';
import {
	register
} from '../../redux/user.redux.js';
import {
	Redirect
} from 'react-router-dom';
@connect(state => state.user, {
	register
})
class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "genius",
			user: "",
			psw: "",
			repeatpsw: "",
		}
		// this.handleClick = this.handleClick.bind(this);
		this.registConfirm = this.registConfirm.bind(this);
	}
	handleClick(key, v) {
		this.setState({
			[key]: v
		})
	}
	registConfirm() {
		this.props.register(this.state);
	}
	render() {
		const RadioItem = Radio.RadioItem;
		return (
			<div>
	            <Logo></Logo>
	            <h2>注册页</h2>
	            <List>
	            	<p>{this.props.msg}</p>
	            	{this.props.redirectTo&&this.props.redirectTo!='/register'?<Redirect to={this.props.redirectTo}></Redirect>:null}
					<InputItem onChange={v=>this.handleClick('user',v)}>
						用户
					</InputItem>
					<WhiteSpace/>
					<InputItem onChange={v=>this.handleClick('psw',v)} type="password">
						密码
					</InputItem>
					<WhiteSpace/>
					<InputItem onChange={v=>this.handleClick('repeatpsw',v)} type="password">
						确认密码
					</InputItem>
					<WhiteSpace/>
					<RadioItem checked={this.state.type === "genius"} onChange={()=>this.handleClick('type','genius')}>牛人</RadioItem>
					<RadioItem checked={this.state.type === "boss"}  onChange={()=>this.handleClick('type','boss')}>Boss</RadioItem>
					<WhiteSpace/>
					<Button type="primary" onClick={this.registConfirm}>
						注册
					</Button>
				</List>
            </div>
		);
	}
}

export default Register;