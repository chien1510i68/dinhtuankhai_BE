const Product = require("../models/Product");
const { mongooseToObjcet } = require("../../util/mongoose");
class ProductController {
  show(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        res.render("product/show", { product: mongooseToObjcet(product) });
      })
      .catch(next);
  }
  // GET
  create(req, res, next) {
    res.render("product/create");
  }
  // POST // store
  store(req, res, next) {
    const formData = req.body;
    const course = new Product(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then((product) =>
        res.render("product/edit", {
          product: mongooseToObjcet(product),
        })
      )
      .catch(next);
  }
  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  delete(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ProductController();
