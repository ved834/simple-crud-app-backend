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


// app.get('/api/products', async (req,res) => {
//  try {
//       const products = await Product.find({});
//       res.status(201).json(products);
//     } catch (error) {
//        res.status(500).json({message: error .message});
//     }
// });


// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(201).json(product);

//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });



// app.post('/api/products', async (req, res) => {
//    try{
//          const product = await Product.create(req.body);
//          res.status(201).json(product);
//    } catch (error) {
//           res.status(500).json({message: error.message});
//    }
// });

// Update a product 
// app.put('/api/products/:id', async (req, res) => {

//     try {
//         const  { id } = req.params;
//          const product = await Product.findByIdAndUpdate(id , req.body);
        
//         if(!product) {
//             return res.status(404).json({message: "Product not found"});
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(201).json(updatedProduct);

//     } catch ( error) {
//         res.status(500).json({message: error.message});
//     }
// });


// detete a product 

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//        if (!product) {
//          return res.status(404).json({message: "Product not found"});
//        }
        
//        res.status(201).json({message: "Product deleted sucessfully"});
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }

// });




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
