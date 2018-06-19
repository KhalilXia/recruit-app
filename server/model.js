const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/appDb';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongodb is connected');
});
const Schema = mongoose.Schema;
// const User = mongoose.model('user',new Schema({
// 	name:{require:true,type:String},
// 	age:{type:Number,require:true}
// }))
const models = {
	users:{
		user:{type:String,require:true},
		psw:{type:String,require:true},
		avatar:String,
		type:{type:String,require:true},
		desc:{type:String,require:true},
		title:{type:String,require:true},
		salary:{type:String,require:true},
		position:String,
		company:String,
		salary:String,
		demond:String
	},
	chats:{

	},
	// people:{
		
	// }
}
for(let m in models){
	mongoose.model(m,new Schema(models[m]));
}
module.exports = {
	getModels:function(m){
		return mongoose.model(m);
	}
}
	