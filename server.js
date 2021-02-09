const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { mongoURI } = require('./config/keys'); 


const app = express();

//Set up bodyParser middleware with Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connect to the database
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB database! Nice work!")
    })
    .catch(err => {
        console.log(err);
    });

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//     { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );


//Set the port
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is running on " + port + " , nice work!")
});