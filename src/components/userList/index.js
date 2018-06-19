import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Wingblank, Whitespace } from 'antd-mobile';
import { withRouter } from 'react-router'
@withRouter
class UserList extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
	        	{this.props.userList.map((v)=>(
	        			v.avatar?<Card key={v.user} onClick={()=>{this.props.history.push(`/chat/${v.user}`)}}>
			            	<Card.Header title={v.user} thumb={require(`../avatarSelect/${v.avatar}.png`)} extra={<span>{v.position}</span>}>
			            	</Card.Header>
			            	<Card.Body>
			            		{v.type === 'boss'?<div style={{fontWeight:'bold'}}>公司：{v.company}</div>:null}
			            		{v.type === 'genius'?v.desc.split('\n').map((item)=>(<div key={item}>{item}</div>)):v.demond.split('\n').map((item)=>(<div key={item}>{item}</div>))}
			            		{v.type === 'boss'?<div style={{color:'#108ee9'}}>薪资：{v.salary}</div>:null}
			            	</Card.Body>
			            </Card>:null
	        		))}
            </div>
        );
    }
}

export default UserList;
