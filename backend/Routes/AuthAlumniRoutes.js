const { signupAlumni, loginAlumni } = require('../Controllers/AuthAlumniController');
const { signupAlumniValidation, loginAlumniValidation } = require('../Middlewares/AuthAlumniValidation');
const router = require('express').Router();

// Routes for Alumni authentication
router.post('/signup', signupAlumniValidation, signupAlumni);
router.post('/login', loginAlumniValidation, loginAlumni);

module.exports = router;

