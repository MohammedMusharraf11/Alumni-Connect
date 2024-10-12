const mongoose = require('mongoose');


const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));