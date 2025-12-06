const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

// Quase Orbigatorio para lidar com POST, pois converte os vcalores enviados no FORM para que se possa le-los.
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Server rodando na porta 3000');
});
