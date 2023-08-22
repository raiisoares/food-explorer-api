const express = require("express");
const { request, response, json } = require("express");
const routes = require("./routes")

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));