function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min) * 1000;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string'){
              reject('CAI NO ERRO T-T');
              return;  
            } 

            resolve(msg.toUpperCase() + ' - passei na promise !');
        }, tempo);
    });
};

// =================================================== //
// Promise.all -> retorna um ARRAY com as promises resolve.

// Promise.race -> Retorna a Primeira promise a ser resolvida.

// Promise.resolve/reject -> 

// =================================================== //

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    // 'Oto Valor'
];

/*
Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(error){
    console.log(error);
});
*/


Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(error){
    console.log(error);
});