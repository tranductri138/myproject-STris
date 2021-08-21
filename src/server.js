import express from "express";
import bodyParser from "body-parser";
// user ? id ? = 7 phai co bodyparser thi ms nhan duoc bang json
import viewEngine from "./config/viewEngine";
import initView from "./router/web";
import connectDB from "./config/connectDB";

require("dotenv").config();
// dòng requre lầ để sử udngj thư viện dotenv để chạy dòng proces . env ở dưới

let app = express();
// config app config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

viewEngine(app);
initView(app);

connectDB(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
  // callback
  console.log("🚀 ~ file: server.js ~ line 18 ~ app.listen ~ port :", port);
});
