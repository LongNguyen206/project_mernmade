const proxy = require("http-proxy-middleware");
// import proxy from "http-proxy-middleware";
module.exports = app => {
  app.use(proxy("/api/users/auth/facebook", { target: "http://localhost:5000" }));
};