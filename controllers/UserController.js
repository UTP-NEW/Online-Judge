var mysql = require('mysql');
var bcrypt = require('bcryptjs');

module.exports = {

	getRegistrar : function(req, res, next){
		return res.render('pages/registrar');
	},

	postRegistrar : function(req, res, next){
		var salt = bcrypt.genSaltSync(10);
		//var password = bcrypt.hashSync(req.body.password, salt);
		var user = {
			username : req.body.username,
			correo : req.body.email,
			password : req.body.password
			//password : password
		};

		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query('INSERT INTO usuarios SET ?', user, function(err, rows, fields){
			if(err) throw err;

			db.end();
		});
		req.flash('info', 'Se ha registrado correctamente.');
		return res.redirect('/pages/login');
	},

	getSignIn : function(req, res, next){

		return res.render('pages/login', {message: req.flash('info')});
	},

	getPerfil : function(req, res, next){
		/*var user = {
			username : req.username,
			correo : req.email,
			password : req.password
			//password : password
		};*/
		/*var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		db.query('SELECT * FROM usuarios WHERE correo = ?', user, function(err, rows, fields){
			if(err) throw err;

			db.end();

			if(rows.length > 0){

				var user = rows[0];
				//if(bcrypt.compareSync(password, user.password)){
				if(password == user.password){
					return done(null, {
						id : user.id,
						nombre : user.nombre,
						correo : user.correo
					});
				}
			}

		})*/
		return res.render('pages/perfil');
	},

	getConfiguracion : function(req, res, next){
		return res.render('pages/configuracion', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	},

	getEnvios : function(req, res, next){
		return res.render('pages/envios');
	},

	getEstadisticas : function(req, res, next){
		return res.render('pages/estadisticas');
	},

	getForo : function(req, res, next){
		return res.render('pages/foro');
	},

	getProblemas : function(req, res, next){
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
		//tableBody=document.getElementById('tablebody');
		//var html = 'doctype html';
		//html +=  'h1 a';
		db.query('SELECT * FROM problemas', function(err, rows){
			if(err) throw err;

			db.end();
			for(i=0; i<rows.length; i++){
				console.log(rows[i]);
				//body += rows[i];
			}
			return res.render('pages/problemas', {
				message: rows, name: 'name'
			});

		})
		
	},

	getRank : function(req, res, next){
		return res.render('pages/rank');
	},

	getTemas : function(req, res, next){
		return res.render('pages/temas');
	},

	getEnviar : function(req, res, next){
		res.render('pages/enviar', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});
	}
}