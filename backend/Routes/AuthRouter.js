const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const router = require('express').Router();
const {upload} = require('../Middlewares/multer');



router.post('/signup', signupValidation, upload.single('profilePhoto'),signup);
router.post('/login', loginValidation,login);


module.exports = router;
