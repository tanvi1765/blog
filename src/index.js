const express = require("express");
const http = require("http");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes");
const config = require("./config/config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/v1", routes);

app.use(express.static(`./public`));
/** Database connection */
connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log("server is started");
});