const creatNewProduct = require('../models/modelcreatNewProduct')

async function serviceRegisterUser(req, res) {
  const { url, title, price, description } = req.body;

  const result = await creatNewProduct({ url, title, price, description });

  if (!result.status) {
    return res.status(200).json({
      status: 200,
      message: 'Product created'
    });
  }
  return res.status(result.status).json(result);
}

module.exports = serviceRegisterUser;
