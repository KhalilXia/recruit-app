// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import ReactDom from 'react-dom';
import reducers from './reducer.js';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import DashBoard from './DashBoard.js';
// import Auth from './Auth.js';
import Register from './containers/register';
import Login from './containers/login';
import AutoRoute from './components/authRoute';
import BossInfo from './containers/bossInfo';
import GeniusInfo from './containers/geniusInfo';
import './config.js';
import 'antd-mobile/dist/antd-mobile.css';
import Dashboard from './components/dashboard';
import './index.css';
import Chat from './components/chat';
var store = createStore(reducers,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():f=>f));
console.log(store.getState());
// function First(props){
// 	console.log(props);
// 	return <div>
// 			<h2>First</h2>
// 		</div>
// }
// function Sec(props){
// 	console.log(props);
// 	return <div>
// 	   		<h2>Sec</h2>
// 	    </div>
// }
// function Test(props){
// 	console.log(props);
// 	return <div>
// 		<h2>{props.match.params.rest}</h2>
// 	</div>
// }
ReactDom.render(
<Provider store={store}>
	<BrowserRouter>
		<div>
		    {/*<Switch>
				<Route component={App} path="/" exact>
				</Route>
				<Route component={First} path="/one">
				</Route>
				<Route component={Sec} path="/two">
				</Route>
				<Route component={Test} path="/:rest"></Route>
			</Switch>*/}
				{/*<Route component={DashBoard} path="/dashBoard"></Route>
				<Route component={Auth} path="/auth">
				</Route>*/}
				
				<AutoRoute></AutoRoute>
				<Switch>
					<Route component={BossInfo} path="/bossinfo"></Route>
					<Route component={GeniusInfo} path="/geniusinfo"></Route>
					<Route component={Register} path="/register"></Route>
					<Route component={Login} path="/login"></Route>
					<Route component={Chat} path="/chat/:userid"></Route>
					<Route component={Dashboard}></Route>
				</Switch>
		</div>
	</BrowserRouter>
</Provider>,document.getElementById('root')
);

// function reducer(state=0,action){
// 	switch(action.type){
// 		case 'plus':
// 			return state + action.data
// 		case 'minus':
// 			return state - action.data
// 		default:
// 			return state
// 	}
// }
// var store = createStore(reducer);
// function listen(){
// 	console.log(store.getState());
// }
// store.subscribe(listen);
// store.dispatch({
// 	type:'plus',
// 	data:10
// });
// store.dispatch({
// 	type:'minus',
// 	data:5
// })
