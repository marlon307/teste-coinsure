const router = require('express').Router();
const controllerLogin = require('../controller/controllerLogin');
const serviceLoginUser = require('../service/serviceLoginUser');

router.post('/login', controllerLogin, serviceLoginUser)

module.exports = router;
