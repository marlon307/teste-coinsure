import axios from 'axios'

async function serviceGetAllProducts() {
  try {
    const { data } = await axios.get('http://localhost:3001/products');
    return data;
  } catch (error) {
    return {
      status: 404
    };
  }
}

export default serviceGetAllProducts;
