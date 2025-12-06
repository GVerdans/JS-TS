const URL = 'https://dummyjson.com/products';

let yarra = [];

async function useAPI(){
    const retorno = await fetch(URL);

    if(retorno.status === 200){
        const obj = await retorno.json();

        for(let elementos of obj.products){
            console.log(elementos.title, elementos.price);
        }

        // return obj.products;
    }


}

useAPI();
