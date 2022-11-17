//jshint esversion:8
const mysql=require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amma',
  database: 'airport'
});


exports.signup=function(req,res){
  console.log(req.body);
  const {userName,email,phoneNumber,password,confirmPassword}=req.body;
  db.query('SELECT email FROM passenger where email= ?' , [email] , async function (error , results){
    if(error){
      console.log(error);
    }
    if(results.length >0){
      return res.render('signup' , {
        message:'That email is already in use !! '
      });
    }else if(password!== confirmPassword){
      return res.render('signup', {
        message: 'Passwords do not match !! '
      });
    }

    let hashedPassword = await bcrypt.hash(password , 8);
    console.log(hashedPassword);

    db.query('insert into passenger set ?' , {username: userName,email: email, phonenumber: phoneNumber, password: password} , function(error , results){
      if(error){
        console.log(error);
      }else {
        console.log(results);
        return res.render('signup' , {
          message: ' User Registered !! '
        });
      }
    });
  });
};










//Login
