// Esse é o import do JS, só que no NODE. 
const mod1 = require('./mod1');
const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch((e) => console.log(e));