const fs = require('node:fs/promises');

module.exports = (path) => fs.readFile(path, 'utf8');