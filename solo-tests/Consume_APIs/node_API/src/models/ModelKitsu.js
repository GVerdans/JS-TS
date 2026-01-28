
const axios = require('axios');

class KitsuAPI {

    async getAxios(urlAPI) {
        try {
            const response = await axios.get(urlAPI);
            const animes = response.data.data;
            const dados = animes.map((anime) => ({
                id: anime.id,
                title: anime.attributes.titles.en_jp,
                image: anime.attributes.posterImage.tiny
            }));

            return dados;
        } catch (err) {
            throw new Error('There was a Error !');
        }
    }
}

module.exports = KitsuAPI;

