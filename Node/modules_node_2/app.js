/*
const mult = require('./mod');
console.log(mult(5, 3));
*/

// Sobre diretórios: o node tem por sí só o modulo de PATH.
const path = require('path');
// Ele inclui os: __dirname e __filename;
console.log(__dirname);
console.log(__filename);

// Posso também mudar o caminho do path:
console.log(path.resolve(__dirname, '..', '..'));