const getAllProducts = require('../models/getAllProducts')

async function serviceGetAllProducs(_req, res) {

  const result = await getAllProducts();

  if (!result.status) {
    return res.status(200).json({
      status: 200,
      message: 'Product listed',
      products: result,
    });
  }
  return res.status(result.status).json(result);

}

module.exports = serviceGetAllProducs;
