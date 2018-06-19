import axios from 'axios';
const LOG_IN = 'login';
const LOG_OUT = 'logout';
const GET_ACTION = 'getdata';
const initState = {
	status:200,
	user:'李云龙',
	age:26,
	isLog:false
}
export function auth(state=initState,action){
	switch(action.type){
		case LOG_IN:
			return {...state,isLog:true}
		case LOG_OUT:
			return {...state,isLog:false}
		case GET_ACTION:
			return {...state,status:action.payload.status,user:action.payload.user,age:action.payload.age}
		default:
			return state
	}
}
function getData(data){
	// axios.get('/userData').then(res=>)
	return {type:GET_ACTION,payload:data}
}
export function getAction(){
	return dispatch=>{
		axios.get('/userData').then(res=>{
			console.log(res);
			dispatch(getData(res.data));
		})
	}
}
export function login(){
	return {type:LOG_IN}
}
export function logout(){
	return {type:LOG_OUT}
}