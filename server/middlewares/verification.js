const User = require("../models/model");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Verification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }
    const user = await User.findById(data.id);
    const result = user
      ? res.json({ status: true, user: user.username })
      : res.json({ status: false });
    return result;
  });
};

module.exports = {
    Verification
}