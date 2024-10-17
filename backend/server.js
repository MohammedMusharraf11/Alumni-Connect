require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AuthAlumniRouter = require('./Routes/AuthAlumniRoutes');


require('./Models/db');



const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api/alumni', AuthAlumniRouter)

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});