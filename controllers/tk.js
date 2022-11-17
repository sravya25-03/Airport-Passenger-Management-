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

exports.ticket=function(req,res){
  

};
