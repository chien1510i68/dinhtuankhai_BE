const newsRouter = require("./news");
const meRouter = require("./me");
const productRouter = require("./product");
const loginRouter = require("./login");
const registerRouter = require("./register");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/product", productRouter);
  app.use("/login" , loginRouter);
  app.use("/register", registerRouter);
  // app.use("/home", siteRouter);
  app.use("/", siteRouter);

}

module.exports = route;
