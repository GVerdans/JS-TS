//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    console.log(`Valor depositado: R$ ${valor}`);
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Agencia/Conta: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) { // Aqui eu sobreescrevi o método sacar original.
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
const ContaPoupanca1 = new ContaPoupanca(12 ,33, 0, )

contaCorrente1.depositar(10);
contaCorrente1.sacar(110);
contaCorrente1.sacar(1);

console.log();

ContaPoupanca1.depositar(10);
ContaPoupanca1.sacar(10);
ContaPoupanca1.sacar(1);
