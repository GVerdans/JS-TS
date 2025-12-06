// defineProperty -> Getter e Setters
// Basicamente são metodos para 'validar'.
// Usando-os posso remover o VALUE e WRITABLE, pois os metodos vão fazer esse trabalho.

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log("Bad Value !")
                return;
            }
            estoquePrivado = valor;
        }
    });
}


const p1 = new Produto('Camisa', 20, 200);
// p1.estoque = 100;
console.log(p1.estoque);
