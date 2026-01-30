const express = require("express");
const app = express();
const routes = require("./src/routes");

const port = 3000; // Aqui pode entrar o .env

app.use(routes);

app.get("/", (req, res) => {
    res.render("./home/index");
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.set("views", "./src/views/");
app.set("view engine", "ejs");
