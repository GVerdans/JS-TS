require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

// const tudo do DB \/
const mongoose = require('mongoose');

// Connection to DB
mongoose.connect(process.env.connectionstring)
.then(() => {

    console.log('DB Connected !');
    // Aqui no caso, quando retornar a promise sem erros. O express vai emitir um 'ready'.
    app.emit('ready');
})
.catch(e => console.log('Erro ao Conectar DB: ' + e));

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


// Aqui quando o app.emit emitir o 'ready', o Express vai executar essa função de 'Ouvir oq está acontecendo'
// Isso está sendo feito para que eu só rode o server quando o DB estiver connectado.clear

app.on('ready', () => {
    app.listen(port, () => {
        console.log('Acessar: http://localhost:3000');
        console.log('Server rodando na porta 3000');
    });
})
