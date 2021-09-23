import express from "express";
import router from "./routes/index";
import bodyParser from "body-parser";

const app = express();
const hostname = "localhost"
const port = 8000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, hostname, () => {
    console.log(`Example app listening at htt://${hostname}:${port}`);
})