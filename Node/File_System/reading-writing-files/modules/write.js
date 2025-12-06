const fs = require('node:fs/promises');

module.exports = (path, file) => {
    fs.writeFile(path, file, {flag: 'w'});
}

// writeFile (path do arquivo a ser escrito, conteudo, {configs do arquivo})
// 'w' -> Limpa o arquivo e escreve oq foi definido
// 'a' -> Faz um append.
/*
fs.writeFile(filePath, 'Fui escrito por "writeFile"\n', {flag: 'a'});
*/