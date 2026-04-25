const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hola Mundo DevOps 2'));
app.listen(3000, () => console.log('Servidor en puerto 3000'));
module.exports = app;
