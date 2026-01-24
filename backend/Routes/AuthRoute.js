const { Signup,Login } = require("../Controllers/AuthController.js");
const { userVerification } = require("../Middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);
module.exports = router;
