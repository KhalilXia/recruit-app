import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getChatList } from '../../redux/chatUser.redux';
import UserList from '../userList';
import { Button } from 'antd-mobile';
@connect(state=>state.chatUser, { getChatList })
class Boss extends Component {
    constructor(props) {
        super(props);
    };
	componentDidMount() {
		this.props.getChatList('genius');
	};
    render() {
        return (
        	<div>
	        	<UserList userList={this.props.userList}></UserList>
            </div>
        );
    }
}
export default Boss;
