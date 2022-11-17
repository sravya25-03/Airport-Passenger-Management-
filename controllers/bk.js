//jshint esversion:8

const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amma',
  database: 'airport'
});

exports.booking = function(req, res) {
  console.log(req.body);
  var arrival = req.body.arrival;
  var departure = req.body.departure;
  var date=req.body.date;
  var data=[];
  var dateoftravel;
  db.query('select * from flights where arrival = ? and departure = ?', [arrival, departure], function(error, results, fields) {

    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      db.query('select * from flights where arrival=? and departure=?', [arrival, departure], function(error, resul) {
        var arr = [];
        for (var i = 0; i < resul.length; i++) {
          arr[i] = resul[i];
        }
        context = {
          'data': arr,
          'dateoftravel':date,
          'arrival':arrival,
          'departure':departure,
        };
        res.render('flight', context);
      });
    } else {
      console.log("message");
      return res.render('booking', {
        message: ' FLIGHTS NOT FOUND!! '
      });
    }
  });
};
