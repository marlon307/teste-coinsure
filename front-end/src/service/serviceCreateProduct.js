import axios from 'axios'

async function serviceCreateProduct(formData, title, price, description) {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'http://localhost:3001/createproduct',
      data: formData,
      body: {
        title,
        price,
        description
      }
    });
    return data;
  } catch (error) {
    return {
      status: 404
    };
  }
}

export default serviceCreateProduct;
