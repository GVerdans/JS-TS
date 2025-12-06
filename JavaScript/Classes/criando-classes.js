// Basicamento a mesma coisa da uma função construtora, mas escrita de forma diferente.

class Pessoa {
	constructor(nome, sobrenome){
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	falar(){ // Não preciso jogar nada no Proto, pois a classe já faz isso.
		console.log(`${this.nome} está falando !`);
	}
}

// Aqui na função construtora
function Pessoa2(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

// Jogando os metodos no prototype
Pessoa2.prototype.falar = function() {
console.log(`${this.nome} falou!`);
};

// Para instanciar é a mesma coisa.
const p1 = new Pessoa('Gabriel', 'Verdan');
const p2 = new Pessoa2('Ricardo', 'Santos');

// p1 com Class
console.log(p1);

//p2 com funcao construtora
console.log(p2);


// Gabriel falando. Achei CLASS mais limpo.
