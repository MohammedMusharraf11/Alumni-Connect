const MessageRoutes = require('./Routes/message.routes.js');
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes.js");
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter.js');
const AuthAlumniRouter = require('./Routes/AuthAlumniRoutes.js');


const app = express();


require('./Models/db');



const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser()); 

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/api/alumni', AuthAlumniRouter)
app.use('/api/messages', MessageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});