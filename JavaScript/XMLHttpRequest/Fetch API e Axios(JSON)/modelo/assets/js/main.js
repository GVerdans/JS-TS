// fetch('./assets/json/pessoas.json')
// .then(response => response.json()) // Aqui eu converto os objetos JSON em objetos JS
// .then(json => loadElementsInPage(json));

// https://github.com/axios/axios
axios('./assets/json/pessoas.json')
.then(response => loadElementsInPage(response.data));

function loadElementsInPage(json){
    const table = document.createElement('table');
    table.className = "table table-bordered";

    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML=pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML=pessoa.idade;
        tr.appendChild(td2);
        
        let td3 = document.createElement('td');
        td3.innerHTML=pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}