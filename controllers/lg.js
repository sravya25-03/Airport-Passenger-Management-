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


exports.login= function(req,res){
    var email = req.body.email;
    var password = req.body.password;

    db.query("select * from passenger where email = ? and password = ?",[email,password],function(error,results,fields){
        if(error){
          console.log(error);
        }
        if(results.length > 0){
            context={
              'email': email,
            };
            res.render('profile' , context);
        }else{
          console.log("message");
          return res.render('login' , {
            message: ' Incorrect password or email , or if you dont have an account please sign up !! '
          });
        }
        
    }) ;
 };





/*
exports.login=function(req,res){

let email= req.body.email;
let password=req.body.password;




  if(email&&password){
  db.query('select * from passenger where email=? and password=?',[email,password],function(error,results,fields){
    if(error){
      console.log(error);
    }
    if(results.length>0){
      req.session.loggedin=true;
      req.session.email=email;
      res.redirect("booking");
      console.log("id entered correct");
    }

  });
}else{
  db.query('SELECT email FROM passenger where email= ?' , [email] , async function (error , results){}
}
};
*/
