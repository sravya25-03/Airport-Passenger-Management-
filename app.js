//jshint esversion:6
const express=require('express');
const app=express();
const mysql=require('mysql');
const dotenv=require('dotenv');
const session= require('express-session');
const path=require('path');

const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amma',
  database: 'airport'
});
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
const publicDirectory=path.join(__dirname,'public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'ejs');
db.connect(function(error){
  if(error){
    console.log(error);
  }else{
    console.log("connected");
  }
});
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/lg',require('./routes/lg'));
app.use('/bk',require('./routes/bk'));
app.use('/fl',require('./routes/fl'));
app.use('/tk' , require('./routes/tk'));
app.use('/pf',require('./routes/pf'));
app.use('/mybook',require('./routes/mybook'));
app.use('/flcl',require('./routes/flcl'));

app.listen(4000,function(){
  console.log("rumming on port 4000");
});
