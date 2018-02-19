var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var fs = require('fs');
var path = require('path');

// TODO Receive POST request and save the meta data to MySQL database ("shapenetpp")
router.post('/save_db', function (req, res, next) {
    console.log('[ meta data saving request ]');
    // TODO Connect to the database: need to keep connection?
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ucsdstanford",
        database: "shapenetpp"
    });
    connection.connect();
    console.log("[ database connected ]");

    // TODO Parse the request
    const body = req.body.body;
    console.log(body);  // TODO

    // TODO Request the database
    // var query = "INSERT INTO ... (.., ..) VALUES (.., ..)";
    var query = "SELECT 1 + 1 AS solution";
    connection.query(query, function (error, results, field) {
        if (error) {
            console.log('[ error (threw) ]', error);
            throw error;
        }
        console.log('[ result ]', results[0]);  // the variables can be accessed by 'results[0].<variable name from 'AS'>'

        // TODO Response to client
        res.end('[ meta data saved ]' + results[0]);
    });
});

// TODO Receive POST request and save obj file
router.post('/save_obj', function (req, res, next) {
    console.log('[ obj saving request]');
    // TODO
    res.end('[ obj saved ]');
});

module.exports = router;