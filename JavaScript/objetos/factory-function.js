// Factory Function

function criaPessoa(nome, sobrenome){
	const pessoaPrototype = {
		falar() {
			console.log(`${this.nome} está falando!`);
		},

		comer() {
			console.log(`${this.nome} está comendo!`);
		},

		beber() {
			console.log(`${this.nome} está bebendo!`);
		}
	};

	return Object.create(pessoaPrototype, { // Aqui eu aponto os metodos do protorype criado para este objeto.
		nome: {value: nome},
		sobrenome: {value: sobrenome}
	});
};

const p1 = criaPessoa('Gabriel', 'Verdan');
const p2 = criaPessoa('Priscilla', 'Bicalho');

console.log(p1);
console.log(p2);
