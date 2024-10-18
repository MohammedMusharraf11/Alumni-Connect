const multer = require('multer');

// Use memoryStorage to store the file in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = { upload };
