const User = require("../models/user");

exports.test = (req, res) => {
  res.send("hello");
};

//create
exports.createUser = async (req, res) => {
  try {
    const userdetails = await new User(req.body);
    userdetails.save((err, user) => {
      if (err) {
        res.status(400).json({
          error: err.message,
          message: "User didn't save",
        });
      }
      return res.json(user);
    });
  } catch (error) {
    console.log(error);
  }
};

//get all products
//get a product
//add a product to cart
//edit a product in cart
//delete a product in cart
