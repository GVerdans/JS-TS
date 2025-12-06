function rand(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min) + min) * 1000;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (typeof msg !== 'string') {
                reject('CAI NO ERRO !')
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

/* Muito verboso para muitas ações.
esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(valor2 => {
        console.log(valor2);
        return esperaAi('Fase 3', rand());
    })
    .then(valor3 => {
        console.log(valor3);
    })
    .catch(e => {
        console.log(e);
    });
*/

// Deixando mais limpo com Async e Await
async function executa() {
    try { // Esse aqui é tipo o .then
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        
        const fase2 = await esperaAi('Fase 3', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

    } catch(e) {
        console.log(e);
    }
}

executa();