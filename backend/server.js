require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AuthAlumniRouter = require('./Routes/AuthAlumniRoutes');
const uploadRoute = require('./Routes/routeUpload');
const connectCloudinary = require('./utils/cloudinary');
const eventRouter = require('./Routes/eventRoutes');

require('./Models/db');



const PORT = process.env.PORT || 8080;
connectCloudinary();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api/alumni', AuthAlumniRouter)
app.use('/api/student/upload' , uploadRoute);
app.use('/api/alumni/upload' , uploadRoute);
app.use('/api/events', eventRouter);

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});