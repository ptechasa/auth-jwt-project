const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
require('dotenv').config({ path: './routes/.env' });

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


//Connect to DB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('CONNECTED to DB'));

//Middleware
app.use(express.json());
//Route Middilewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log("sever up and running on port 3000"));