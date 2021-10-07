import express from "express";
import bodyParser from "body-parser";
import path from "path";

import routerAccount from "./routes/user";
import routerWatches from "./routes/watches";

const app = express();
const hostname = "localhost"
const port = 8000;

app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join(__dirname, "uploads/images")));

app.use("/api", routerAccount);
app.use("/api/watch", routerWatches);

app.listen(port, hostname, () => {
    console.log(`App listening at htt://${hostname}:${port}`);
})