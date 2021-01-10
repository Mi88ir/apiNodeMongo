//import
const express = require("express");
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require("body-parser");
const postsRoutes = require('./routes/posts.js'); //import routes

//init
const app = express();
const PORT = 3000;

//connect to DB
mongoose.connect(process.env.DB_CONNECTOR, {
    useNewUrlParser: true
}, () => {
    console.log("Connection to the database established!");
});

//middleware
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

//listen
app.listen(process.env.PORT || PORT, () => {
    console.log("Server successfully running...")
    setTimeout(() => {
        console.log("Connecting to database...");
    }, 2000);
});