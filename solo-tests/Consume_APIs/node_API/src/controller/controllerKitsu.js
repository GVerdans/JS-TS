const kitsu = require('../models/ModelKitsu')

exports.index = async (req, res) => {
    try {
        const kitsuInstance = new kitsu();
        const dados = await kitsuInstance.getAxios('https://kitsu.io/api/edge/anime');

        res.render('index', { dados })
        // res.json(dados);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
}






