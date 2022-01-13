import axios from 'axios'

async function serviceRegisterUser(name, email, password) {
  try {
    const { data } = await axios.post('http://localhost:3001/register', {
      name,
      email,
      password
    });
    return data;
  } catch (error) {
    return {
      status: 404
    };
  }
}

export default serviceRegisterUser;
