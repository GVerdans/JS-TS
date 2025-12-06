// Manipulando Prototypes
// NÃO RECOMENDADO USAR O ___proto___
/*
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

// Setando a chave A à chave C.

Object.setPrototypeOf(objB, objA); // Jogo para o objB, a chave do objA.
Object.setPrototypeOf(objC, objB);
// Aqui no caso: objB recebe chave de A. objB = chaveA e chaveB;
// Aqui no caso: objC recebe as chaves do objB (A e B). Ai fica objC = chaveA, chaveB e chaveC.


console.log(objC.chaveA);
*/

// ================================================== //

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

// Adicionando métodos a minha classe por prototypes.
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Alargador', 10);

// Porém se eu declarar um Objeto Literal, os metodos setados por prototype não acompanham.

const produto2 = {
    nome: 'Caneco',
    preco: 20
};
/*
produto2.aumento(10); // Não funciona pois os métodos ainda não pertencem a cadeia de prototypes.
*/
Object.setPrototypeOf(produto2, Produto.prototype); // Agora os metodos vao funcionar.
produto2.aumento(100);

console.log(produto1);
console.log(produto2);

// Já posso também criar um Objeto com os metodos definidos em Prototypes.
const produto3 = Object.create(Produto.prototype, {
    nome: {
        value: 'Calcado',
        enumerable: true,
        configurable: true,
        writable: true
    },
    preco: {
        value: 300,
        enumerable: true,
        configurable: true,
        writable: true
    }
});

produto3.desconto(50);
console.log(produto3);