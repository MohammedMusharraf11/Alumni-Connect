require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AuthAlumniRouter = require('./Routes/AuthAlumniRoutes');
const connectCloudinary = require('./config/cloudinary'); // Adjust the path to the config folder

require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;

connectCloudinary(); // Call the function to configure Cloudinary

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api/alumni', AuthAlumniRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
