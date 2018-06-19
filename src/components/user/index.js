import React, { Component } from 'react';
import { Result, List, Button, Modal } from 'antd-mobile';
import { connect } from 'react-redux';
import browserCookies from 'browser-cookies';
import { cancellation } from '../../redux/user.redux'
@connect(state=>state.user,{ cancellation })
class User extends Component {
    constructor(props) {
        super(props);
        this.Cancellation = this.Cancellation.bind(this);
    }
    Cancellation(){
        Modal.alert('注销', '确定要退出登录吗？', [
          { text: '取消', onPress: () => {} },
          { text: '确定', onPress: () => {browserCookies.erase('userid');this.props.cancellation()} },
        ]);
        // browserCookies.erase('userid');
    }
    render() {
    	console.log(this.props);
		// const { user, avatar, company, desc }= this.props;
		// console.log(avatar);
		// const Brief = List.Brief;
        return (
        	<div>
        		{this.props.user?<Result
                    img={<img src={require(`../avatarSelect/${this.props.avatar}.png`)} style={{width:64}}/>}
                    title={this.props.user}
                  />:null}	
                  <Button type="primary" onClick={this.Cancellation}>注销</Button>		      
			</div> 
        );
    }
}

export default User;
