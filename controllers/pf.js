//jshint esversion:8

const mysql=require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const session= require('express-session');
const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amma',
  database: 'airport'
});

exports.profile=function(req,res){

  var email = req.body.email;

console.log(email);



db.query('select * from ticket where email = ? ', [email], function(error, results, fields) {

  if (error) {
    console.log(error);
  }
  if (results.length > 0) {
    db.query('select * from ticket where email=? ', [email], function(error, resul) {
      var arr1 = [];
      for (var i = 0; i < resul.length; i++) {
        arr1[i] = resul[i];
      }
      
      context = {
        'data': arr1,
        'email':email,
      };
      res.render('myBookings', context);
    });
  } else {
    console.log("message");
    return res.render('myBookings', {
      message: '  YOU HAVE NO UPCOMING JOURNEYS!! '
    });
  }
});
};
