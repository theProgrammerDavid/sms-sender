require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');// initialize our express app

const apiRouter = require('./routes/api');
const auth = require('./util/auth')

//const apiRouter = require('./routes/apiRouter');

const app = express();

//app.use('/api', apiRouter);
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    res.json({
        message: 'welcome to the api'
    });
});

app.post('/api/post', auth.verifyToken, (req, res) => {

    jwt.verify(req.token, "ThisIsASecret", (err, authData) => {
        if(err){
            res.json({ err, code:403});
        }
        else{
            res.json({
                message: 'post created successfully',
                authData
            });
        }
    });

})


app.post('/api/login', (req, res) => {

    //get user back from db

    const user = { username: 'david', email: 'david@example.com' };

    jwt.sign({ user }, process.env.JWT_SECRET, {expiresIn:'2d'},(err, token) => {
        res.json(token);
    });
})



/*
FORMAT OF JWT TOKEN
Authorization: <access_token>
*/

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});