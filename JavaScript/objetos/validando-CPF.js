// Testes: 705.484.450-52
// Testes: 070.987.720-03

function ValidaCPF(inputCPF) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return inputCPF.replace(/\D+/g, ''); // Esse /\D+/g representa tudo que não for um numnero. 
        }
    });

};

ValidaCPF.prototype.validaEntrada = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito( cpfParcial + digito1);
    const novoCPF = cpfParcial + digito1 + digito2;

    return novoCPF === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    let digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('070.987.720-03');

if(cpf.validaEntrada()){
    console.log("CPF Válido !");
} else {
    console.log("CPF Inválido !");
}