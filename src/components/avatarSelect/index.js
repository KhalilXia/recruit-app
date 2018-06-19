import { Grid, List } from 'antd-mobile';
import React, { Component } from 'react';
import "./index.css";

class AvatarSelect extends Component {
    constructor(props) {
        super(props);
		this.state = {
			icon:"",
			text:""
		}
    }
    render() {
    	let imgs = "circus (1),circus (2),circus (3),circus (4),circus (5),circus (6),circus (7),circus (8),circus (9),circus (10),circus (11),circus (12),circus (13),circus (14),circus (15),circus (16),circus (17)"
    		.split(",")
    		.map((item)=>({
    			icon:require(`./${item}.png`),
    			text:item
    		}));
		const gridHeader = this.state.icon?(<div><span>已选择头像</span><img src={this.state.icon} style={{width:30,marginLeft:20}}/></div>):<div>请选择头像</div>
        return (
            <div>
            	<List renderHeader={()=>gridHeader}>
            		<Grid data={imgs} onClick={el=>{this.setState(el);this.props.handleClick(el.text)}} columnNum={5}/>
            	</List>
            	
            </div>
        );
    }
}

export default AvatarSelect;

