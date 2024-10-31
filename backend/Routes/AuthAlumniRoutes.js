const { signupAlumni, loginAlumni } = require('../Controllers/AuthAlumniController');
const { signupAlumniValidation, loginAlumniValidation } = require('../Middlewares/AuthAlumniValidation');
const router = require('express').Router();
const upload = require('../Middlewares/multer');

// Routes for Alumni authentication
router.post('/signup', upload.single('image'),signupAlumniValidation, signupAlumni);
router.post('/login', loginAlumniValidation, loginAlumni);

module.exports = router;
