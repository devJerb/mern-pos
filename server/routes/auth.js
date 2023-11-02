const { Signup, Login } = require("../controllers/authController");
const { Verification } = require("../middlewares/verification");
const router = require('express').Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", Verification);

module.exports = router;