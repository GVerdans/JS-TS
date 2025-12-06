const express = require('express');
const app = express();
const port = 3000;

// Quase Orbigatorio para lidar com POST, pois converte os vcalores enviados no FORM para que se possa le-los.
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send(`
            <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="nome">
            <button>Ola Mundo</button>
            </form>
        `);
});

// isso aqui são parametros que vou receber da URL
app.get('/testes/:id?/:parametro?', (req, res) => {
    console.log(req.params);

    // Posso também dar um Query String
    // https://meusite.com/?nome=fulano&sobrenome=beltrano
    console.log(req.query);
    res.send(req.params);
});

app.post("/", (req, res) => {
    console.log(req.body);
    // req.body vai ser enviado pelo POST e tratado pelo req.body.chaveEl
    res.send(`Valor enviado ${req.body.nome}`);
})

app.listen(port, () => {
    console.log('Acessar: http://localhost:3000');
    console.log('Server rodando na porta 3000');
});