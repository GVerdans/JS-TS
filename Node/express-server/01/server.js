const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello <b>Word !</b>')
});

app.get('/contato', (req, res) => {
    res.send("Page Contact !")
})

app.listen(port, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Server rodando na porta 3000');
});