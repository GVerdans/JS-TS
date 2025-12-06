// Copiando um Objeto
// Spread Operator

const produto = {nome: 'caneco', preco: 1.8};

// Spread Operator

const outraCoisa = { 
    ...produto,
    material: 'Porcelana' // Ainda posso adicionar novas chaves
 };

outraCoisa.nome = 'Camisa';
outraCoisa.preco = 2.5;
console.log(outraCoisa);



// Como também posso usar Object.assign
const otoProduto = Object.assign({}, produto, {material: 'Porcelana'}); // Ainda posso criar outra chave se quiser
otoProduto.nome = 'Oto';
otoProduto.preco = 1.0;

console.log(produto);
console.log(otoProduto);


// Aqui eu descubro as propriedades da chave do objeto, as mesmas usadas no defineProperty.

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
/*
 Retorna isso aqui \/
{
  value: 'caneco',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Aqui retorno somente os valores, sem as chaves.
// console.log(Object.values(produto));

// No entries eu retorno um Array com as chaves e valores.
// console.log(Object.entries(produto));
// Saida: Um array de arrays.    [ [ 'nome', 'caneco' ], [ 'preco', 1.8 ] ]

// Ainda posso iterar sobre essa saida.
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}