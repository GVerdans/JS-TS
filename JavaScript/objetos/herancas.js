// Heranças
// Exemplo: Uma loja que vende: Camisa, caneco
// Todos são Produtos.

// Os dois tem em comum esses dados aqui.
// E especifico: 
// Camisa -> cor 
// Caneca -> Material
// Também quero por desconto e aumento de preco.

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // Aqui eu chamo a função construtora e passo os parametros que tem em comum naas duas, nome e preco. Porém eu não chamos os prototypes, pois cada função possui os seus.
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Agora eu chameis os prot de Produto. Porém ainda não linkei o constructor Camiseta á seus objetos.
Camiseta.prototype.constructor = Camiseta; // Aqui eu linkei o prototype Camiseta ao constructor Camiseta.

function Caneco(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
};
Caneco.prototype = Object.create(Produto.prototype);
Caneco.prototype.constructor = Caneco;

const caneca = new Caneco('Caneca', 12, 'Porcelana', 100);
const produto = new Produto('Generico', 30);
const camisa = new Camiseta('Regata', 10, 'Preto');

console.log(caneca);
console.log(camisa);
console.log(produto);