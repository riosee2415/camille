const express = require("express");
const morgan = require("morgan");
const globalRouter = require("./routers/globalRouter");
const path = require("path");

const PORT = 4000;
const app = express();

app.set(`view engine`, `pug`);
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} WEB SERVER START!`);
});
