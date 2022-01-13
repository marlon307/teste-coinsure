const router = require('express').Router();
const controllerProducts = require('../controller/controllerProducts');
const serviceCreateProduct = require('../service/serviceCreateProduct');
const serviceGetAllProducs = require('../service/serviceGetAllProducs');

router.post('/createproduct', controllerProducts, serviceCreateProduct);
router.get('/products', serviceGetAllProducs);

module.exports = router;
