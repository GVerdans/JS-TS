// Object Map


const pessoas = [
{id: 3, nome: 'Luiz'},
{id: 2, nome: 'Gabriel'},
{id: 1, nome: 'José'}
];

const novasPessoas = new Map();

for(const pessoa of pessoas){
	const { id } = pessoa;
	novasPessoas.set(id, { ...pessoa });
};

console.log(novasPessoas);
