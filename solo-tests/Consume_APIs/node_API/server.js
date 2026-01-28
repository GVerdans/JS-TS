const express = require('express')
const app = express()
const routes = require('./src/routes/routes')
const port = 3000 // Aqui pode entrar o .env

app.use(routes)

app.get('/', (req, res) => {
    res.send('/')
})

app.get('/kitsu', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.set('views', './src/views/');
app.set('view engine', 'ejs');
