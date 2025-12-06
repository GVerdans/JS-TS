class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já ligado !`);
            return;
        }
        console.log(`${this.nome} Ligado !`);
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já Desligado!`);
            return;
        }

        this.ligado = false;
    }
}

// Esse extends puxa os atributos e metodos da classe citada.
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome); // Quando eu uso extends, e quero criar outro constructor, PRECISO usar o super(atributos da classe pai) para criar outros atributos.(Pra mim não faz sentido, mas blz).

        this.cor = cor;
        this.modelo = modelo;
    }

    ligar() {
        console.log('Ligado Smartphone !'); // Esse metodo está disponível só para Smartphone. Porque eu o criei novamente.
    }
}

const d1 = new DispositivoEletronico('Dispositivo Eletronico');
const s1 = new Smartphone('Iphone', 'Azul', '10 Pro Max');

d1.ligar();
s1.ligar(); // Aqui ta disponivel só para o smartphone
// console.log(s1);