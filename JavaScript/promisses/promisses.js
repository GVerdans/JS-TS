function rand(max) {
    const num = Math.floor(Math.random() * max);
    return num;
}

/* Com callback
function EsperaAi(msg, tempo, cb){
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
};
*/
// Isso aqui é com os Callbacks. No caso se o paramentro CB existir, ele executa a proxima função. Só que fica uma parada enorme.
/*
EsperaAi('Frase 1', rand(3000), function(){
    EsperaAi('Frase 2', rand(3000), function() {
        EsperaAi('Frase 3', rand(3000))
    });
});
*/

// Promises
function EsperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(new Error('BAD VALUE !')); // Daqui vou direto pro .CATCH.

        setTimeout(() => {
            resolve(msg); // Sempre que eu tiver esse RESOLVE, preciso do .THEN na chamada da function.
        }, tempo);
    });
}

EsperaAi('Frase 1', rand(3000))
.then(resposta => {
    console.log(resposta);
    return EsperaAi(22222, rand(3000)); // A saida disso aqui, vai pra resposta2; Vulgo retorno de uma Promise.
})
.then(resposta2 => {
    console.log(resposta2);
    return EsperaAi('Frase 3', rand(3000)); // A saida disso aqui vai pra resposta3;
})
.then(resposta3 => {
    console.log(resposta3);
})
.catch(e => { // O parametro do reject, vem pra cá como 'e'.
    console.log(e);
});