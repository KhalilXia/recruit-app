import React , { Component }from 'react';
import logoImg from './logo.png';
import './index.css';
class Logo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="logo-container">
            	<img src={logoImg} alt=""/>
            </div>
        );
    }
}

export default Logo;
