const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routes 
app.use('/api/products', productRoute);



app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});


// MongoDB Connection
mongoose.connect("mongodb+srv://Test_01:ArDyMv7wRykAi3U@cluster0.mgkov.mongodb.net/myDatabaseName?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error("Connection failed!", error);
    });
