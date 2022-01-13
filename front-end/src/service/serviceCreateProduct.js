import axios from 'axios'

async function serviceCreateProduct(url, title, price, description) {
  try {
    const { data } = await axios.post('http://localhost:3001/createproduct', {
      url,
      title,
      price: Number(price),
      description
    });
    return data;
  } catch (error) {
    return {
      status: 404
    };
  }
}

export default serviceCreateProduct;
