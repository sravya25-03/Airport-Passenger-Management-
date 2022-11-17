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

exports.flight = function(req, res) {
  console.log(req.body);
  const {
    flight_id,
    name,
    email,
    phno,
    gender,
    classs,
    date,
    arrival,
    departure,
  } = req.body;
  console.log(flight_id);

  db.query('select * from flights where flight_id=?', [flight_id], function(error, results) {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {

      console.log("hi");

      db.query('SELECT seat_no FROM seat WHERE class_type=? AND seat_no NOT IN (SELECT seat_no FROM ticket)', [classs], function(error, resul) {
        console.log("coming");
        let obj = resul[0].seat_no;
        context = {
          'flight_id': flight_id,
          'name': name,
          'email': email,
          'gender': gender,
          'classs': classs,
          'seat_no':obj,
          'date': date,
          'gate_no':10,
          'arrival':arrival,
          'departure':departure,

        };
        db.query('insert into ticket set ?', {
          flight_id: flight_id,
          name: name,
          email:email,
          seat_no: obj,
          gender: gender,
          date: date,
          class_type: classs,
          gate_no:10,
          arrival:arrival,
          departure:departure,
        }, function(error, resultss) {
          if (error) {
            console.log(error);
          } else {
            res.render('ticket', context);
          }
        });

      });

    } else {
      console.log("ERRRR");
      return res.render('flight', {
        message: 'FLIGHTS NOT FOUND !!'
      });
    }
  });
};
