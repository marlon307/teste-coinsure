const express = require('express');
const cors = require('cors');
const routerRegister = require('./routes/routerRegister');
const routerLogin = require('./routes/routerLogin');
const routerProducts = require('./routes/routerProducts');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + 'uploads/images'));

app.use(routerRegister);
app.use(routerLogin);
app.use(routerProducts);

app.listen(PORT, () => {
  console.log(`Servidor ON: http://localhost:${PORT}`);
});
