import GeraCPF from './modules/geraCPF';

const btnNewCPF = document.querySelector('.btnNewCPF')

btnNewCPF.addEventListener("click", () => {
    startNewCPF();
})

function startNewCPF() {
    const cpfGerado = new GeraCPF();
    const divHTML = document.querySelector('.cpf-gerado');
    divHTML.innerHTML = cpfGerado.newCPF();
};