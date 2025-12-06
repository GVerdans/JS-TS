const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');


// Quase Orbigatorio para lidar com POST, pois converte os vcalores enviados no FORM para que se possa le-los.
app.use(express.urlencoded({ extended: true }));

// Configurando pasta com Arquivos estaticos
app.use(express.static(path.resolve(__dirname, './public')));
//                  ou path.resolve(__dirname, 'public')

// Meu prorpio middleware
app.use(meuMiddleware);
app.use(routes);

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Server rodando na porta 3000');
});
