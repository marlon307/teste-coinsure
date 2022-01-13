const express = require('express');
const cors = require('cors');
const routerRegister = require('./routes/routerRegister');
const routerLogin = require('./routes/routerLogin');

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());

app.use(routerRegister);
app.use(routerLogin);

app.listen(PORT, () => {
  console.log(`Servidor ON: http://localhost:${PORT}`);
})
