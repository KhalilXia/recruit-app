import React, {
    Component,
    PropTypes
} from 'react';
import axios from 'axios';
import {
    Redirect
} from 'react-router-dom';
import {
    bindActionCreators
} from 'redux';
import {
    getInfo
} from '../../redux/user.redux.js';
import {
    connect
} from 'react-redux';
@connect(state => state.user, {
    getInfo
})
class AuthRoute extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getInfo();
    }
    render() {
        const page = ['/login', '/register'];
        const index = window.location.href.split('//')[1].indexOf('/');
        const pathname = window.location.href.slice(window.location.href.split('//')[0].length + index + 2);
        const isLoginOrRegistPage = page.includes(pathname);
        console.log(this.props.redirectTo, this.props.redirectTo && !isLoginOrRegistPage);
        return (<div>{
            this.props.redirectTo && !isLoginOrRegistPage ? <Redirect to={this.props.redirectTo}></Redirect> : null
        }</div>)
    }
}
// function mapStateToProps(){
//     return {}
// }
// function mapDispatchToProps(dispatch){
//     return {
//         getInfo:bindActionCreators(getInfo,dispatch)
//     }
// }
export default AuthRoute;