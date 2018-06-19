import {combineReducers} from 'redux';
// import {counter} from './index.redux';
// import {auth} from './auth.redux';
import { user } from './redux/user.redux';
import { chatUser } from './redux/chatUser.redux';
const reducers = combineReducers({
	user,
	chatUser
})
export default reducers