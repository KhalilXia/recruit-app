import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
@withRouter
class NavLinkBar extends Component {
    static propTypes = {
        data: PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
    	// console.log(this.props.data.filter(
     //        			(item)=>item.isShow));
    	const pathname = this.props.location.pathname;
    	console.log(this.props,pathname);
        return (
            <TabBar>
            	{
            		this.props.data.map(
            			(v)=>(
            				<TabBar.Item key={v.icon} icon={{uri:require(`../dashboard/${v.icon}`)}} selectedIcon={{uri:require(`../dashboard/${v.iconSelect}`)}} selected={pathname === v.path} title={v.text} onPress={()=>this.props.history.push(v.path)}>
            				</TabBar.Item>
            				)
            			)
            	}
            </TabBar>
        );
    }
}

export default NavLinkBar;
