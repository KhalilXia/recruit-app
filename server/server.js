const express = require('express');
const userRouter = require('./user.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){ 
						console.log('socket-io has already connected');
						socket.on('saySth',function(data){
							console.log(data);
						})
					});
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user',userRouter);


// User.create({name:'xia',age:18},function(err,doc){
// 	if(!err){
// 		console.log(doc);
// 	}else{
// 		console.log(err);
// 	}
// })
app.get('/',function(req,res){
	res.send('<h1>Hello World!</h1>');
})
server.listen(9093,()=>{
	console.log('app is running on port 9093');
})