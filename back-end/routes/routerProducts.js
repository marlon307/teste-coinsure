const router = require('express').Router();
const controllerProducts = require('../controller/controllerProducts');
const serviceCreateProduct = require('../service/serviceCreateProduct');

router.post('/postproduct', controllerProducts, serviceCreateProduct)

module.exports = router;
