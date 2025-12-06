class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

// Dá pra exportar dessas duas maneiras:
/*
module.exports.nome = 'Gabriel';
module.exports.sobrenome = 'Verdan';
exports.Pessoa = Pessoa;
*/
// Ou ainda:
const nome = 'gab';
const sobrenome = 'verdin';
const qlqcoisa = 'qlq coisa';

module.exports = {
    nome, sobrenome, qlqcoisa
};
