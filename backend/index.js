require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');// initialize our express app
const jwt = require('jsonwebtoken');

const apiRouter = require('./routes/api');

//const apiRouter = require('./routes/apiRouter');

const app = express();

app.use('/api', apiRouter);
const port = process.env.PORT || 3000;

// app.get('/api', (req, res) => {
//     res.json({
//         message: 'welcome to the api'
//     });
// });

// app.post('/api/post', verifyToken, (req, res) => {

//     jwt.verify(req.token, "ThisIsASecret", (err, authData) => {
//         if(err){
//             res.json({ err, code:403});
//         }
//         else{
//             res.json({
//                 message: 'post created successfully',
//                 authData
//             });
//         }
//     });

// })


// app.post('/api/login', (req, res) => {

//     //get user back from db

//     const user = { username: 'david', email: 'david@example.com' };

//     jwt.sign({ user }, process.env.JWT_SECRET, {expiresIn:'2d'},(err, token) => {
//         res.json(token);
//     });
// })



/*
FORMAT OF JWT TOKEN
Authorization: <access_token>
*/

function verifyToken(req, res, next) {

    //step 1: get the auth header value
    const bearerHeader = req.headers['authorization'];

    //step 2: check if bearer is undefined
    if (typeof (bearerHeader) !== 'undefined') {
        req.token = bearerHeader;
        next();
    }
    else {
        //user does not have correct authorization 
        res.json({ message: "Invalid or Incorrect JWT" });
    }

}

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});