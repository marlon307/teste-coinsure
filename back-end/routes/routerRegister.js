const router = require('express').Router();
const controllerRegister = require('../controller/controllerRegister');
const serviceRegisterUser = require('../service/serviceRegisterUser');

router.post('/register', controllerRegister, serviceRegisterUser)

module.exports = router;
