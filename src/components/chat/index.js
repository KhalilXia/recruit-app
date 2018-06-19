import React, { Component } from 'react';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
var socket = io('http://localhost:3000');
socket.on('connect', function(){console.log('client side has already connected')});
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	text:""
        }
        this.submit = this.submit.bind(this);
    };
	submit() {
		socket.emit("saySth",{text:this.state.text});
	};
    render() {
        return (
        	<div>
	        	<h4>chat with {this.props.match.params.userid}</h4>
	          	<div>Chat</div>
	          	<List className="stick-bottom">
	          		<InputItem placeholder={'请输入'} onChange={(v)=>{this.setState({text:v})}} extra={<span onClick={this.submit}>输入</span>}></InputItem>
	          	</List>
          	</div>
        );
    }
}

export default Chat;
