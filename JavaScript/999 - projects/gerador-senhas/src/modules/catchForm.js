import randPassword from "./generator";

const divSenha = document.querySelector('.senha');
const qtdCaracteres = document.querySelector('[name = qtd-caracteres]');
const checkNumbers = document.querySelector('#inlineCheckbox1');
const checkUpper = document.querySelector('#inlineCheckbox2');
const checkLower = document.querySelector('#inlineCheckbox3');
const checkSymbols = document.querySelector('#inlineCheckbox4');
const btnSubmit = document.querySelector('.submit-btn');

export default () => {
    btnSubmit.addEventListener("click", () => {
        divSenha.innerHTML = startPswd()
    })
};

function startPswd() {
    const pswd = randPassword(Number(qtdCaracteres.value), checkUpper.checked, checkLower.checked, checkSymbols.checked, checkNumbers.checked);

    return pswd || 'Select Some Option !';
}