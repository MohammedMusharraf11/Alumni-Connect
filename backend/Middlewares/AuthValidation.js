const Joi = require('joi');

// Signup validation middleware
const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).required().messages({
      'string.empty': 'Full Name is required',
      'string.min': 'Full Name must be at least 3 characters long',
    }),
    graduationYear: Joi.number().integer().min(2024).max(new Date().getFullYear() + 50).required().messages({
      'number.base': 'Graduation year must be a valid number',
      'number.min': 'Graduation year must be at least 2024',
      'number.max': 'Graduation year must be a valid future year',
    }),
    collegeEmail: Joi.string()
      .pattern(/^[a-zA-Z0-9]+@pesu\.pes\.edu$/)
      .required()
      .messages({
        'string.empty': 'College Email is required',
        'string.pattern.base': 'Please provide a valid PESU college email address',
      }),
    course: Joi.string().min(2).required().messages({
      'string.empty': 'Course is required',
      'string.min': 'Course must be at least 2 characters long',
    }),
    usn: Joi.string().min(8).required().messages({
      'string.empty': 'USN is required',
      'string.min': 'USN must be at least 8 characters long',
    }),
    fieldOfStudy: Joi.string().min(3).required().messages({
      'string.empty': 'Field of Study is required',
      'string.min': 'Field of Study must be at least 3 characters long',
    }),
    linkedin: Joi.string().uri().optional().messages({
      'string.uri': 'LinkedIn must be a valid URL',
    }),
    github: Joi.string().uri().optional().messages({
      'string.uri': 'GitHub must be a valid URL',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
    }),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
      'any.only': 'Confirm password must match password',
    }),
    profilePhoto: Joi.any().optional(),
  });

  // Validate the request body against the schema
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Validation error',
      details: error.details.map((detail) => detail.message),
    });
  }
next();
  // Proceed to the next middleware if validation passed

};

// Login validation middleware
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
      collegeEmail: Joi.string()
        .pattern(/^[a-zA-Z0-9]+@pesu\.pes\.edu$/)
        .required()
        .messages({
          'string.empty': 'College Email is required',
          'string.pattern.base': 'Please provide a valid PESU college email address',
        }),
      password: Joi.string().min(6).required().messages({
        'string.empty': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
      }),
    });
  
    // Validate the request body against the schema
    const { error } = schema.validate(req.body, { abortEarly: false });
  
    if (error) {
      return res.status(400).json({
        message: 'Validation error',
        details: error.details.map((detail) => detail.message),
      });
    }
  
    // Proceed to the next middleware if validation passed
    next(); // Add this line
  };
  

module.exports = {
  signupValidation,
  loginValidation,
};
