
const Add_ONE = 'addOne';
const MINUS_ONE = 'minusOne';

export function counter(state=1,action){
	switch(action.type){
		case Add_ONE:
			return state + 1;
		case MINUS_ONE:
			return state - 1;
		default:
			return state
	}
}
export function addAction(){
	return {
		type:Add_ONE
	}
}
export function minusAction(){
	return {
		type:MINUS_ONE
	}
}
export function addAsync(){
	return dispatch=>{
		setTimeout(()=>{dispatch(addAction())},2000)
	}
}