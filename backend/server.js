require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const path = require('path');
require('./Models/db');
const corsOptions = {
    origin: 'https://alumni-connect-99.onrender.com',
    Credentials: true,
};
app.use(cors(corsOptions));



const PORT = process.env.PORT || 8080;
const _dirname =   path.resolve();



app.use(bodyParser.json());
app.use('/auth', AuthRouter);

app.use(express.static(path.join(_dirname, '/frontend/dist')));

app.get('*', (_, res) => {
    res.sendFile(path.join(_dirname, 'frontend','dist','index.html'));
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});