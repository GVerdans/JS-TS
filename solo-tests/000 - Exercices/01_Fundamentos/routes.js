const express = require("express");
const app = express;
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Rota /");
});

route.get("/about", (req, res) => {
    res.send("Rota /About");
});

route.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

route.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    // esse req.params.id eu que passo no URL
    res.json({ userId: req.params.id });
    console.log("body =", req.body);
});

route.get("/busca", (req, res) => {
    console.log("q=", req.query.q);
    console.log("limit = ", req.query.limit);
    console.log("query =", req.body);
});

module.exports = route;
