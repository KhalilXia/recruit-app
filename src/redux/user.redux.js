import axios from 'axios';
import {
	redirectToPath
} from '../util.js';
const ERROR_REQUEST = "ERROR_REQUEST";
const AUTH_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FIRST = "LOGIN_FIRST";
const REGIST_FIRST = "REGIST_FIRST";
const CANCELLATION = 'CANCELLATION';
function authSuccess(data) {
	return {
		type: AUTH_SUCCESS,
		payload: data
	}
}

function requestFail(msg) {
	return {
		msg,
		type: ERROR_REQUEST,
	}
}
const initState = {
	user: "",
	psw: "",
	type: "",
	isAuth: false,
	msg: "",
	avatar: "",
	redirectTo: "",
	demond: "",
	position: "",
	salary: "",
	company: ""
}
export function user(state = initState, action) {
	switch (action.type) {
		case AUTH_SUCCESS:
			return { ...state,
				msg: "",
				redirectTo: redirectToPath(action.payload),
				...action.payload
			};
		case LOGIN_FIRST:
			return { ...state,
				msg: "",
				redirectTo: '/login'
			};
		case REGIST_FIRST:
			return { ...state,
				msg: "",
				redirectTo: '/register'
			};
		case ERROR_REQUEST:
			return { ...state,
				msg: action.msg
			};
		case CANCELLATION:
			return {
				...initState,
				redirectTo: '/login'
			}
		default:
			return state
	}
}
export function update(data) {
	return dispatch => {
		axios.post("/user/update", data)
			.then(res => {
				if (res.status == 200 && res.data.code == 0) {
					dispatch(authSuccess(res.data.data));
				} else if (res.status != 200) {
					dispatch(requestFail(res.data.msg));
				}
			})
	}
}
export function getInfo() {
	return dispatch => {
		axios.get('/user/info')
			.then((res) => {
				if (res.status == 200) {
					console.log(res.data);
					if (res.data.code === 0) {
						dispatch(authSuccess(res.data.data));
					} else {
						dispatch({
							type: LOGIN_FIRST
						})
					}
				}
			})
	}
}
export function toRegistrer() {
	return dispatch => {
		dispatch({
			type: REGIST_FIRST
		})
	}
}
export function register({
	user,
	psw,
	type,
	repeatpsw
}) {
	if (!user || !psw || !repeatpsw) {
		return {
			type: ERROR_REQUEST,
			msg: "请将注册信息填写完整！"
		}
	}
	if (psw != repeatpsw) {
		return {
			type: ERROR_REQUEST,
			msg: "密码和确认密码不同！"
		}
	}
	return dispatch => {
		axios.post('/user/register', {
				user,
				psw,
				type
			})
			.then(res => {
				if (res.status == 200 && res.data.code === 0) {
					dispatch(authSuccess(res.data.data));
				} else if (res.status != 200) {
					dispatch(requestFail("ajax失败！"));
				} else if (res.data.code !== 0) {
					dispatch(requestFail(res.data.msg));
				}
			})
	}
}
export function login({
	user,
	psw
}) {
	if (!user || !psw) {
		return requestFail("请将用户名和密码填写完整！");
	}
	return dispatch => {
		axios.post('/user/login', {
				user,
				psw
			})
			.then(res => {
				if (res.status == 200 && res.data.code === 0) {
					dispatch(authSuccess(res.data.data));
				} else if (res.status != 200) {
					dispatch(requestFail("ajax失败！"));
				} else if (res.data.code !== 0) {
					dispatch(requestFail(res.data.msg));
				}
			})
	}
}
export function cancellation(){
	return dispatch=>{
		dispatch({
			type:CANCELLATION
		})
	}
}