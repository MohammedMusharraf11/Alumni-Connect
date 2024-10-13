require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

require('./Models/db');

const corsOptions = {
    origin: 'https://alumni-connect-backend.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable if you're using cookies/auth tokens
  };


const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/auth', AuthRouter);


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});