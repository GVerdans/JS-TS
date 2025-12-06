// Função Construtora -> Molde (Classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
    /*
    Esse método nomeCompleto é incluido automaticamente no __proto__ pelo próprio JS, para que não seja instanciado a toda hora e fique consumindo recursos.
    */
}
// Posso também incluir metodos ao Prototype assim. (( RECOMENDADO ))
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Instância da Função Construtora. Objetos da função
const pessoa2 = new Pessoa('Maria', 'A.');

console.dir(pessoa1.nomeCompleto()); 
console.dir(pessoa2);