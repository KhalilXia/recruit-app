import React, { Component, PropTypes } from 'react';
import { NavBar, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import NavLinkBar from '../navLinkBar';
import { Switch, Route } from 'react-router';
import Boss from '../boss';
import Genius from '../genius';
import User from '../user';
// import User from '../user';
import './index.css';
// function Boss(){
//     return (
//         <div>
//             Boss    
//         </div>
//         )
// }
// function Genius(){
//     return (
//         <div>
//             Genius    
//         </div>
//         )
// }
function Msg(){
    return (
        <div>
            <Button onClick={(e)=>{console.log(e)}}>123qq</Button>    
        </div>
        )
}
// function User(){
//     return (
//         <div>
//             <Button onClick={(e)=>{console.log(e)}}>123qq</Button>    
//         </div>
//         )
// }
@connect((state)=>state.user,null)
class Dashboard extends Component {
    // static propTypes = {
    //     className: PropTypes.string,
    // };

    constructor(props) {
        super(props);
        
    }
    
    render() {
		console.log(this.props.location.pathname,this.props);
		let pathname = this.props.location.pathname;
    	let page = [
    	{
			path:'/boss',
			text:'牛人列表',
			type:'boss',
            icon:'boss.png',
            iconSelect:'bossS.png',
            isShow:this.props.type === 'boss',
            component:Boss
    	},
    	{
			path:'/genius',
			text:'Boss列表',
			type:'genius',
            icon:'genius.png',
            iconSelect:'geniusS.png',
            isShow:this.props.type === 'genius',
            component:Genius
    	},
    	{
			path:'/msg',
			text:'消息',
			type:'msg',
            icon:'msg.png',
            iconSelect:'msgS.png',
            isShow:true,
            component:Msg
    	},
    	{
			path:'/user',
			text:'个人信息',
			type:'user',
            icon:'me.png',
            iconSelect:'meS.png',
            isShow:true,
            component:User
    	},
    	];
        let showPage = page.filter((item)=>item.isShow);
        console.log(showPage);
        return (
            <div>
                <NavBar>
                	{page.filter((item)=>item.path === pathname).map((item)=>(<span key={item.path}>{item.text}</span>))}
                </NavBar>
                <div>
                    
                        {showPage.map((item)=>(<Route component={item.component} path={item.path} key={item.path}/>))}
                    
                </div>
                <NavLinkBar data={showPage}></NavLinkBar>
			</div>
        );
    }
}

export default Dashboard;
