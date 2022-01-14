const router = require('express').Router();
const controllerProducts = require('../controller/controllerProducts');
const serviceCreateProduct = require('../service/serviceCreateProduct');
const serviceGetAllProducs = require('../service/serviceGetAllProducs');
const uploadImage = require('../uploads/upload')

router.post('/createproduct', uploadImage.single('url'), controllerProducts, serviceCreateProduct);
router.get('/products', serviceGetAllProducs);

module.exports = router;
