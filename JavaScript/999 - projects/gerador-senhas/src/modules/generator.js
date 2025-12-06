    function rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function randUpperCase() {
        return String.fromCharCode(rand(65, 90))
    }

    function randLowerCase() {
        return String.fromCharCode(rand(97, 122))
    }

    function randNumber(){
        return String.fromCharCode(rand(48, 57));
    }

    const symbols = ',./?[]{}()!@#$%*()^=-_*';

    function randSymbols() {
        return symbols[rand(0, symbols.length)];
    }

    export default function randPassword(tam, upper, lower, symbols, num) {
        const psdwArray = [];
        tam = Number(tam);
        for(let i = 0; i < tam; i++){
            upper && psdwArray.push(randUpperCase());
            lower && psdwArray.push(randLowerCase());
            num && psdwArray.push(randNumber());
            symbols && psdwArray.push(randSymbols());
        }
        return psdwArray.join('').slice(0, tam);
    }

randPassword(5, true, true);