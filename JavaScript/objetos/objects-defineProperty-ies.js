// defineProperty e defineProperties

function Produto(nome, preco, estoque) {
    /*
    this.nome = nome; // Essa variavel nome é publica, logo posso chama-la de qualquer lugar
    this.preco = preco;
    */

    // Esse aqui é somente para uma chave.
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Aqui eu mostro a chave
        value: estoque, //defino qual valor recebe
        writable: false, // Posso alterar ?
        configurable: true // Posso alterar as configurações caso haja outro defineProperty ?
    });


    // Esse aqui é para diversas chaves.
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Aqui eu mostro a chave
            value: nome, //defino qual valor recebe
            writable: true, // Posso alterar ?
            configurable: true // Posso alterar as configurações caso haja outro defineProperty ?
        },

        preco: {
            enumerable: true, // Aqui eu mostro a chave
            value: preco, //defino qual valor recebe
            writable: true, // Posso alterar ?
            configurable: true // Posso alterar as configurações caso haja outro defineProperty ?
        }
    })


}

const p1 = new Produto('Camisa', 20, 3);

/*
p1.estoque = 500000;
console.log(p1); // Altera estoque devido ao primeiro configurable:true que permite a alteração no segundo defineProperty para writable: true.
*/

// Outro método é o Object.keys(objeto). Retorna as chaves como array SE enumerable: TRUE
// console.log(Object.keys(p1));

console.log(p1);

