var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.index);

// rutas de usuario
//router.get('/users/signup', controllers.UserController.getSignUp);
router.get('/pages/registrar', controllers.UserController.getRegistrar);
router.post('/pages/registrar', controllers.UserController.postRegistrar);
router.get('/pages/login', controllers.UserController.getSignIn);
router.post('/pages/login', passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/pages/login'
}));

router.get('/pages/perfil', controllers.UserController.getPerfil);
router.get('/pages/configuracion', controllers.UserController.getPerfil);
router.get('/pages/enviar', controllers.UserController.getConfiguracion);
router.get('/pages/envios', controllers.UserController.getEnviar);
router.get('/pages/estadisticas', controllers.UserController.getEstadisticas);
router.get('/pages/foro', controllers.UserController.getForo);
router.get('/pages/categorias', controllers.UserController.getCategorias);
router.get('/pages/categorias/:id_categoria', controllers.UserController.getProblemas)
router.get('/pages/categorias/:id_categoria/:id_lista_problemas', controllers.UserController.getProblemas);
//router.get('/pages/categorias', controllers.UserController.getCategorias);
//router.get('/pages/categorias', controllers.UserController.getProblemas);
//router.get('/pages/problem/:index', controllers.UserController.getProblemas);
router.get('/pages/rank', controllers.UserController.getRank);
router.get('/pages/rank/:id_lista_rank', controllers.UserController.getRank);
router.get('/pages/temas', controllers.UserController.getTemas);
router.get('/pages/login', controllers.UserController.getSignIn);

module.exports = router;