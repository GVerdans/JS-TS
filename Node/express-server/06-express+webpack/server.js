const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
const path = require('path');


// Quase Orbigatorio para lidar com POST, pois converte os vcalores enviados no FORM para que se possa le-los.
app.use(express.urlencoded({ extended: true }));

// Configurando pasta com Arquivos estaticos
app.use(express.static(path.resolve(__dirname, './public')));
//                  ou path.resolve(__dirname, 'public')

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Server rodando na porta 3000');
});
