const path = require('node:path');
const filePath = path.resolve(__dirname, 'teste.json');

const write = require('./modules/write');
const read = require('./modules/reading');
/*
const pessoa = [
    {
        nome: "Joao",
        idade: 25,
        rg: "123.456.789-00"
    },
    {nome: "Maria"},
    {nome: "Gabriel"},
    {nome: "Paulo"}
];
*/

// const json = JSON.stringify(pessoa, '', 2);

// write(filePath, json);

async function leArquivo(caminho){
    const dados = await read(caminho);
    renderDados(dados);
}

function renderDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(filePath)