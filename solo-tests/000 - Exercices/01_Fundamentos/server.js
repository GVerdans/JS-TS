const express = require("express");
const app = express();
const route = require("./routes");

const port = 3000;

app.use(route);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
