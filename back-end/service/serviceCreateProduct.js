const creatNewProduct = require('../models/modelcreatNewProduct')

async function serviceCreateProduct(req, res) {
  const { title, price, description } = JSON.parse(req.body.object);
  const url = `images/${req.file.filename}`;

  const result = await creatNewProduct({ url, title, price, description });

  if (!result.status) {
    return res.status(200).json({
      status: 200,
      message: 'Product created'
    });
  }
  return res.status(result.status).json(result);
}

module.exports = serviceCreateProduct;
