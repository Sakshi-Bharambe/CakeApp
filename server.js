// // server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors');
// app.use(cors());
// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Define User schema
// const UserSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     address: String,
//     email: String,
//     product: String,
// });

// const User = mongoose.model('User', UserSchema);

// app.get('/', (req, result)=>{
//     result.status(200);
//     result.send("Welcom to Niramay Server");

   
// });

// // Register endpoint
// app.post('/register', (req, res) => {
//     console.log("Here..")
//     //const { userName, password, address, email } = req.body;
//     console.log(req.body);
//     User.create(req.body)
//          .then(user => res.json(user))
//         .catch(err => console.log(err));
// });
// app.post('/test', (req, res) => {
//     console.log("Here..",req.body);
//     //const { userName, password, address, email } = req.body;
  
// });


// app.post('/login', (req, res) => {
//     const { userName, password } = req.body;
//     // Check if the username and password match any user in the database
//     User.findOne({ userName, password })
//         .then(user => {
//             if (user) {
//                 // If user exists, send a success response
//                 res.json({ success: true });
//             } else {
//                 // If user doesn't exist or password doesn't match, send a failure response
//                 res.json({ success: false });
//             }
//         })
//         .catch(err => {
//             console.error('Error logging in:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         });
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require('cors');
// const session = require('express-session');
// app.use(cors());
// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch(err => console.log(err));

// // Define User schema
// const UserSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     address: String,
//     email: String,
//     product: String,
// });

// const User = mongoose.model('User', UserSchema);

// app.get('/', (req, result)=>{
//     result.status(200);
//     result.send("Welcom to Niramay Server");

   
// });
// app.use(session({
//     secret: 'your_secret_key', // Replace with your own secret key
//     resave: false,
//     saveUninitialized: true, // Set to true if you want to save uninitialized sessions
// }));

// // Register endpoint
// app.post('/register', (req, res) => {
//     console.log("Here..")
//     //const { userName, password, address, email } = req.body;
//     console.log(req.body);
//     User.create(req.body)
//          .then(user => res.json(user))
//         .catch(err => console.log(err));
// });
// app.post('/test', (req, res) => {
//     console.log("Here..",req.body);
//     //const { userName, password, address, email } = req.body;
  
// });

// app.post('/login', (req, res) => {
//     const { userName, password } = req.body;
//     // Check if the username and password match any user in the database
//     User.findOne({ userName, password })
//         .then(user => {
//             if (user) {
//                 // If user exists, send a success response
//                 res.json({ success: true });
//             } else {
//                 // If user doesn't exist or password doesn't match, send a failure response
//                 res.json({ success: false });
//             }
//         })
//         .catch(err => {
//             console.error('Error logging in:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         });
// });
// app.get('/logout', (req, res) => {
//     console.log('Logout');
    

//     req.session.destroy((err) => {
//         if (err) {
//             console.error('Error destroying session:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });
// app.post('/buy', (req, res) => {
//     const { userName, productName } = req.body;
//     // Find the user by username and update the product field
//     User.findOneAndUpdate({ userName }, { product: productName })
//         .then(() => res.json({ success: true }))
//         .catch(err => {
//             console.error('Error updating product:', err);
//             res.status(500).json({ error: 'Internal server error' });
//         });
// });
// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const session = require('express-session');
app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
// mongoose.connect('mongodb://localhost:27017/try',{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=> console.log('MongoDB Connected'))
// Define User schema
const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    address: String,
    email: String,
    products: [{
        productName: String,
        timestamp: { type: Date, default: Date.now }
    }]
});

const User = mongoose.model('User', UserSchema);

app.get('/', (req, result)=>{
    result.status(200);
    result.send("Welcom to Niramay Server");

   
});
app.use(session({
    secret: 'your_secret_key', // Replace with your own secret key
    resave: false,
    saveUninitialized: true, // Set to true if you want to save uninitialized sessions
}));
// Register endpoint
app.post('/register', (req, res) => {
    console.log("Here..")
    //const { userName, password, address, email } = req.body;
    console.log(req.body);
    User.create(req.body)
         .then(user => res.json(user))
        .catch(err => console.log(err));
});
app.post('/test', (req, res) => {
    console.log("Here..",req.body);
    //const { userName, password, address, email } = req.body;
  
});

app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    // Check if the username and password match any user in the database
    User.findOne({ userName, password })
        .then(user => {
            if (user) {
                // If user exists, send a success response
                res.json({ success: true });
            } else {
                // If user doesn't exist or password doesn't match, send a failure response
                res.json({ success: false });
            }
        })
        .catch(err => {
            console.error('Error logging in:', err);
            res.status(500).json({ error: 'Internal server error' });
        });
});
app.get('/logout', (req, res) => {
    console.log('Logout');
    

    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ success: true });
        }
    });
});
app.post('/buy', (req, res) => {
    const { userName, productName } = req.body;
    const productPurchase = { productName, timestamp: new Date() };

    User.findOneAndUpdate(
        { userName },
        { $push: { products: productPurchase } },
        { new: true }
    )
    .then(updatedUser => {
        if (updatedUser) {
            console.log('Product added:', productName);
            res.json({ success: true });
        } else {
            console.error('User not found');
            res.status(404).json({ error: 'User not found' });
        }
    })
    .catch(err => {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));