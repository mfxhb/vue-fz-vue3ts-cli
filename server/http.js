/*
 * @Author: BORING GHOST
 * @Date: 2022-08-24 15:41:36
 * @LastEditTime: 2022-08-24 15:49:11
 * @Description:
 */
import express from "express";
import { startOneServe } from "./serve/serve.js";

const app = express();

app.use("/testApi", function (req, res) {
  res.status(200).json("获取appApi数据成功~");
});

const app2 = express();

startOneServe(app, 8899);
