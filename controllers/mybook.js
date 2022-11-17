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

exports.myBookings=function(req , res){


  const ticket_id =req.body.ticket_id;

  db.query('select * from ticket where ticket_id=?' , [ticket_id] , function(error , results){
    if(error){
      console.log(error);
    }
    if(results.length >0){
      db.query('delete  from ticket where ticket_id=?' , [ticket_id] , function(error , resul){
        if(error){
          console.log(error);
        }else{
          return res.render('cancel' , {
            message:'YOUR TICKET IS CANCELLED !! '
          });
        }
      });
    }else{
      return res.render('myBookings' , {
        message:'ENTER CORRECT TICKET_ID !! '
      });
    }
  });

};
