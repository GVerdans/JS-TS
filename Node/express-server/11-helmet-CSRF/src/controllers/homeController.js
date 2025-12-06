exports.paginaInicial = (req, res) => {
    res.render('index', {
        title: 'Novo Titulo Injetado por EJS',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send('Nova rota POST');
    return;
}

