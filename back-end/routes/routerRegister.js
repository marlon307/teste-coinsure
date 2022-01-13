const router = require('express').Router();
const controllerRegister = require('../controller/controllerRegister')

router.post('/register', controllerRegister)

module.exports = router;
