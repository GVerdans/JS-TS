import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    newCPF() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;

        return this.formataCPF(novoCPF);
    }

    formataCPF(cpfSemFormatacao){
        return (
        cpfSemFormatacao.slice(0, 3) + '.' + 
        cpfSemFormatacao.slice(3, 6) + '.' + 
        cpfSemFormatacao.slice(6, 9) + '-' + 
        cpfSemFormatacao.slice(9, 11)
        ); 
    }
}