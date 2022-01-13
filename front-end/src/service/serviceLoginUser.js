import axios from 'axios'

async function serviceLoginUser(email, password) {
  try {
    const { data } = await axios.post('http://localhost:3001/login', {
      email,
      password
    });
    return data;
  } catch (error) {
    return { status: 404 };
  }
}

export default serviceLoginUser;
