const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  todo: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    maxlength: [25, "Name must be 25 character long"],
  },
  task : [String],
  
},
{ timestamps: true }
);

module.exports = moongoose.model("NodejsTodo", userSchema);
