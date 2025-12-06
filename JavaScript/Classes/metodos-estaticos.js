class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    // Metodo de Instancia ( Só consigo acessar instanciando a Classe ).
    diminuirVolume(){
        this.volume -= 2;
    }

    // Metodo Estatico. ( Só consigo acessar SEM instanciar a Classe // NÃO TEM ACESSO AOS DADOS DA INSTANCIA ).
    static trocaPilha(/* pode receber parametros */){
        console.log('Metodo Estatico !');
    }
}

const controle1 = new ControleRemoto('LG');

// Metodo de Instancia, pois instanciei no controle1.
controle1.aumentarVolume();

// Metodo Estatico, só chamei acessei pela Classe e fé.
ControleRemoto.trocaPilha();

console.log(controle1);