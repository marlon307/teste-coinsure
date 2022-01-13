const router = require('express').Router();
const controllerProducts = require('../controller/controllerProducts');
const serviceCreateProduct = require('../service/serviceCreateProduct');

router.post('/createproduct', controllerProducts, serviceCreateProduct)

module.exports = router;
