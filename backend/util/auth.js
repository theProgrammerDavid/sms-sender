const express = require('express');
const jwt = require('jsonwebtoken');


/*
FORMAT OF JWT TOKEN
Authorization: <access_token>
*/

// function verifyToken(req, res, next) {

//     //step 1: get the auth header value
//     const bearerHeader = req.headers['authorization'];

//     //step 2: check if bearer is undefined
//     if (typeof (bearerHeader) !== 'undefined') {
//         req.token = bearerHeader;
//         next();
//     }
//     else {
//         //user does not have correct authorization 
//         res.json({ message: "Invalid or Incorrect JWT" });
//     }

// }

module.exports = {
    verifyToken: function (req, res, next) {

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
}
