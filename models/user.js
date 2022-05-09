const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: Number,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
