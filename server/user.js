const express = require('express');
const Router = express.Router();
const models = require('./model.js');
const User = models.getModels('users');
const utils = require('utility');
const _filter = {
	psw: 0,
	_v: 0
};
// Router.get('/info',(req,res)=>{
// 	return res.json({code:1});
// });
function md5Encrypt(psw) {
	const salt = "THE_SALT";
	return utils.md5(utils.md5(psw) + salt);
}
Router.get('/list', function(req, res) {
	// User.remove({},function(err,doc){

	// })
	const {
		type
	} = req.query;
	User.find({
		type
	}, function(err, doc) {
		if (err) {
			return res.json({
				code: 1,
				msg: "未找到数据"
			})
		}
		return res.json({
			code: 0,
			data: doc
		});
	})
});
Router.get('/info', function(req, res) {
	const {
		userid
	} = req.cookies;
	console.log(userid);
	if (!userid) {
		return res.json({
			code: 1
		});
	}
	User.findOne({
		_id: userid
	}, _filter, function(err, doc) {
		if (doc) {
			console.log(doc);
			return res.json({
				code: 0,
				data: doc
			});
		}
		return res.json({
			code: 1,
			msg: "服务器错误！"
		});
	})
});
Router.post('/login', function(req, res) {
	console.log(req.body);
	const {
		user,
		psw
	} = req.body;
	User.findOne({
		user
	}, function(err, doc) {
		if (doc) {

			if (doc.psw == md5Encrypt(psw)) {
				res.cookie('userid', doc._id);
				// console.log("qipengcheng");
				// console.log(doc,doc.psw,typeof doc,Object.keys(doc),doc._doc,typeof(doc._doc));
				// const obj = {user:doc.user,type:doc.type};
				const {
					psw,
					...obj
				} = doc._doc;

				return res.json({
					code: 0,
					data: obj
				});
			}
			return res.json({
				code: 1,
				msg: "密码错误！"
			});
		}

		return {
			code: 1,
			msg: "服务器错误！"
		}
	})
});
Router.post('/register', function(req, res) {
	console.log(req.body);
	const {
		user,
		psw,
		type
	} = req.body;
	User.findOne({
		user
	}, _filter, function(err, doc) {
		if (doc) {
			return res.json({
				code: 1,
				msg: "用户名重复!"
			});
		}
		User.create({
			user,
			type,
			psw: md5Encrypt(psw)
		}, function(err, doc) {
			if (!err) {
				res.cookie('userid', doc._id);
				const {
					psw,
					...rest
				} = doc;
				console.log('ccc', rest);
				return res.json({
					code: 0,
					data: doc
				});
			}
			return res.json({
				code: 1,
				msg: "服务器错误!"
			});
		})
	})
});
Router.post('/update', function(req, res) {
	const userid = req.cookies.userid;
	if (!userid) {
		res.dumps({
			code: 1
		})
	} else {
		const body = req.body;
		User.findByIdAndUpdate(userid, body, function(err, doc) {
			const data = Object.assign({}, {
				user: doc.user,
				type: doc.type
			}, body)
			return res.json({
				code: 0,
				data
			});
		})
	}
})
module.exports = Router;