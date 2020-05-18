const { validationResult } = require("express-validator");

module.exports = {
  //returning a functioning because we want to customiae the template for signin, signup and new product
  handleErrors(templateFunc) {
    return (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.send(templateFunc({ errors }));
      }
      next();
    };
  },


  requireAuth(req, res, next) {

  if ((!req.session.userId)) {
    return res.redirect("/signin");
  }

  next();

  }
};
