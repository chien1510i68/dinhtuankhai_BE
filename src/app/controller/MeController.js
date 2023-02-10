const Product = require("../models/Product");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MeController {
  //   [GET]: /me
  storedCourses(req, res, next) {
    Product.find({})
      .then((product) =>
        res.render("me/stored-courses", {
          product: mutipleMongooseToObject(product),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
