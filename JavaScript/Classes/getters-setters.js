// Getter: Vai ser usado na hora de obter um valor(consulta). (Normalmente é acessado para Printar um valor).
// Setter: É usado na hora que tento setar(atribuir) um valor. Tipo: variavel.nome = X. Aqui o setter entra em ação (normalmente uma validação para setar um valor a uma varivel.)

const _velocidade = Symbol('velocidade'); // Aqui criei um atributo pseudo-privado

class Carro {
    constructor (nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() { // São tratados como atributos, mas não sao
        return this[_velocidade];
    }

    set velocidade(valor){ // A mesma coisa
        if(valor <= 0 || valor >= 100) return;
        if(typeof valor !== 'number') return;

        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const carro1 = new Carro('Fusca');

for(let i = 0; i < 200; i++){
    carro1.acelerar();
}

carro1.velocidade = 99;
console.log(carro1);