const URL = 'https://kitsu.io/api/edge/anime';

let yarra = [];

async function useAPI() {
    const retorno = await fetch(URL);

    if (retorno.status === 200) {
        const response = await retorno.json();
        const animeList = response.data;

        const dados = animeList.map(anime => {
            const titles = anime.attributes.titles;
            return {
                id: anime.id,
                title: titles?.en || titles?.ja_jp || titles?.pt_br || 'Sem título',
                image: anime.attributes.posterImage.large
            };
        });
        console.table(dados);

        // return obj.products;
    }


}

useAPI();
