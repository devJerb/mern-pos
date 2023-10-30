const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const model = mongoose.model(
  "User",
  userSchema.pre("save", async () => {
    this.password = await bcrypt.hash(this.password, 12);
  })
);

export default model;
