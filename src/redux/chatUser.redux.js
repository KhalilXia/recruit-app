import axios from 'axios';
const USER_LIST = 'USER_LIST';
let initState = {
	userList:[]
}
export function chatUser(state = initState,action){
	switch(action.type){
		case USER_LIST:
			return {...state,userList:action.payload}
		default:
			return state
	}	
}
function chatList(data){
	return {type:USER_LIST,payload:data}
}
export function getChatList(type){
	return dispatch=>{
		axios.get(`/user/list?type=${type}`).
		then(res=>{
			if(res.status === 200 && res.data.code === 0){
				dispatch(chatList(res.data.data));
			}
		})
	}
}