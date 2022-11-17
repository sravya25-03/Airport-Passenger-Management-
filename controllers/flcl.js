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
const nodemailer= require('nodemailer');






exports.flightcancellation = function(req,res){
   const flight_id = req.body.flight_id;
   const date = req.body.date;
console.log("hi");
   db.query('SELECT * FROM ticket WHERE flight_id=? and date=?',[flight_id,date],(err,results)=>{
      if(err){
        console.log('err');
    }
      if(results){
         let mailTransporter = nodemailer.createTransport({
            service: 'outlook',
            auth:{
               user: 'airportservices9@outlook.com',
               pass: 'airport$$'
            }
          });
        db.query('SELECT DISTINCT email FROM ticket WHERE flight_id=? and date=?',[flight_id,date], (err,resul)=>{
         if(err){console.log(err);}
         for(var i=0;i < resul.length; i++){
             let details = {
               from:'airportservices9@outlook.com',
               to: resul[i].email,
               subject:' Flight cancelled',
               text:'Your flight is cancelled. You will recieve refund soon...'
             };
             console.log("hellllloooo");
             mailTransporter.sendMail(details,(err)=>{
               if(err){console.log(err);}
               else{console.log('Email sent');}
             });

          }
          db.query('DELETE FROM ticket WHERE flight_id=? and date=?',[flight_id,date], (err,result)=>{
            if(err){console.log(err);}
            context = {
              data:results,
            };
            res.render('flightcancellation',context);
         });
        });

     }else{
      res.render('flightcancellation',{message:'Flight doesnt exists'});
     }
   });
};
