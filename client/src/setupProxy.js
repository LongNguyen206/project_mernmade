const express = require('express')
const proxy = require("http-proxy-middleware");

const app = express();
// import proxy from "http-proxy-middleware";
module.exports = app => {
  app.use(proxy("/api", { target: "http://localhost:5000", changeOrigin: true }));
};