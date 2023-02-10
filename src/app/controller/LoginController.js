const mongoose = require("../../util/mongoose");
const { mongooseToObjcet } = require("../../util/mongoose");
const AccountModel = require("../models/Account");
// const Account = require("../models/Account");

class LoginController {
  // Get method
  create(req, res, next) {
    res.render("account/login");
  }

  // Post method
  authorization(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    AccountModel.findOne({
      email: email,
      password: password,
    }).then((data) => {
      if (data) {
        if (data.roll == 1) {
          res.redirect("/");
        } else {
          console.log("Ban khong la user");
        }
      } else {
        console.log("Dang nhap that bai ");
        res.redirect("/login/create");
      }
    });
    // .then((data) => {
    //   res.redirect("/" ,{data : mongooseToObjcet(data)})

    // })
  }
}
module.exports = new LoginController();
