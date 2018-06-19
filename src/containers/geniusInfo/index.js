import React, {
    Component
} from 'react';
import {
    NavBar,
    List,
    InputItem,
    Button,
    TextareaItem
} from 'antd-mobile';
import AvatarSelect from '../../components/avatarSelect';
import {
    connect
} from 'react-redux';
import {
    update
} from '../../redux/user.redux';
import {
    Redirect
} from 'react-router-dom';
@connect((state) => state.user, {
    update
})
class GeniusInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "",
            position: "",
            desc: ""
        }
        this.changeMessage = this.changeMessage.bind(this);
        this.confirmInfo = this.confirmInfo.bind(this);
    }
    changeMessage(key, v) {
        this.setState({
            [key]: v
        })
    }
    confirmInfo() {
        console.log(this.state, this.props.redirectTo);
        this.props.update(this.state);
    }
    render() {
        return (
            <div>
            	{this.props.redirectTo&&this.props.redirectTo!='/geniusinfo'?<Redirect to={this.props.redirectTo}></Redirect>:null}
            	<NavBar
			      mode="dark"
			    >NavBar</NavBar>
		        <AvatarSelect handleClick={(v)=>{
		        	this.setState({avatar:v})
		        }}></AvatarSelect>
		        <List>
            		<InputItem onChange={v=>{this.changeMessage("position",v)}}>求职职位</InputItem>
            		<TextareaItem onChange={v=>{this.changeMessage("desc",v)}} autoHeight title="个人简历" rows={3}></TextareaItem>
            	</List>
            	<Button type="primary" onClick={this.confirmInfo}>确定</Button>
            </div>
        );
    }
}

export default GeniusInfo;