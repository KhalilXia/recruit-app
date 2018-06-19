import React, { Component } from 'react';
import { NavBar, List, InputItem, Button, TextareaItem } from 'antd-mobile';
import AvatarSelect from '../../components/avatarSelect';
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';
@connect((state)=>state.user,{ update })
class BossInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	avatar:"",
        	position:"",
        	company:"",
        	salary:"",
        	demond:""
        }
        this.changeMessage = this.changeMessage.bind(this);
        this.confirmInfo = this.confirmInfo.bind(this);
    }
    changeMessage(key,v){
		this.setState({
			[key]:v
		})
    }
    confirmInfo(){
    	console.log(this.state);
    	this.props.update(this.state);
    }
    render() {
        return (
            <div>
            	{this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
            	<NavBar
			      mode="dark"
			    >NavBar</NavBar>
		        <AvatarSelect handleClick={(v)=>{
		        	this.setState({avatar:v})
		        }}></AvatarSelect>
		        <List>
            		<InputItem onChange={v=>{this.changeMessage("position",v)}}>招聘职位</InputItem>
            		<InputItem onChange={v=>{this.changeMessage("company",v)}}>公司名称</InputItem>
            		<InputItem onChange={v=>{this.changeMessage("salary",v)}}>职位薪资</InputItem>
            		<TextareaItem onChange={v=>{this.changeMessage("demond",v)}} autoHeight title="职位要求" rows={3}></TextareaItem>
            	</List>
            	<Button type="primary" onClick={this.confirmInfo}>确定</Button>
            </div>
        );
    }
}

export default BossInfo;
