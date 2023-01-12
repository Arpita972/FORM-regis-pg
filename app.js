const express = require("express");
const router = require("./routers/web.js");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(router)
app.use(cors());
app.use(bodyParser.json());



app.listen(8000, () => {
  console.log("Server has Started");
});
