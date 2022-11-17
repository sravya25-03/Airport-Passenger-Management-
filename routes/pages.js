//jshint esversion:6


const express= require('express');
const router= express.Router();
router.get('/',function(req,res){
  res.render('index');
});

router.get('/index',function(req,res){
  res.render("index");
});
router.get("/login",function(req,res){
  res.render("login");
});

router.get("/signup",function(req,res){
  res.render("signup");
});

router.get("/shop",function(req,res){
  res.render("shop");
});
router.get("/flight",function(req,res){
  res.render("flight");
});

router.get("/transport",function(req,res){
  res.render("transport");
});
router.get("/auth/login",function(req,res){
  res.render("login");
});
router.get("/auth/signup",function(req,res){
  res.render("signup");
});
router.get("/lg/profile",function(req,res){
  res.render("profile");
});
router.get("/lg/login",function(req,res){
  res.render("login");
});
router.get("/lg/signup",function(req,res){
  res.render("signup");
});
router.get("/booking",function(req,res){
  res.render("booking");
});
router.get("/lg/booking",function(req,res){
  res.render("booking");
});
router.get("/lg/cancel",function(req,res){
  res.render("cancel");
});
router.get("/lg/index",function(req,res){
  res.render("index");
});
router.get("/lg/shop",function(req,res){
  res.render("shop");
});
router.get("/lg/transport",function(req,res){
  res.render("transport");
});
router.get("/lg/myBookings",function(req,res){
  res.render("myBookings");
});
router.get("/bk/booking",function(req,res){
  res.render("booking");
});
router.get("/bk/flight",function(req,res){
  res.render("flight");
});

router.get("/fl/flight",function(req,res){
  res.render("flight");
});

router.get("/fl/ticket",function(req,res){
  res.render("ticket");
});

router.get("/ticket" , function(req,res){
  res.render("ticket");
});


router.get("/myBookings" , function(req,res){
  res.render("myBookings");
});


router.get("/cancel" , function(req,res){
  res.render("cancel");
});
router.get("/pf/index",function(req,res){
  res.render("index");
});
router.get("/pf/shop",function(req,res){
  res.render("shop");
});
router.get("/pf/transport",function(req,res){
  res.render("transport");
});
router.get("/pf/myBookings",function(req,res){
  res.render("myBookings");
});
router.get("/mybook/cancel",function(req,res){
  res.render("cancel");
});

router.get("/bk/profile",function(req,res){
  res.render("profile");
});
router.get("/bk/login",function(req,res){
  res.render("login");
});
router.get("/pf/profile",function(req,res){
  res.render("profile");
});
router.get("/pf/login",function(req,res){
  res.render("login");
});
router.get("/mybook/profile",function(req,res){
  res.render("profile");
});
router.get("/mybook/login",function(req,res){
  res.render("login");
});
router.get("/fl/profile",function(req,res){
  res.render("profile");
});
router.get("/fl/login",function(req,res){
  res.render("login");
});
router.get("/fl/index",function(req,res){
  res.render("index");
});
router.get("/fl/shop",function(req,res){
  res.render("shop");
});
router.get("/fl/transport",function(req,res){
  res.render("transport");
});
router.get("/mybook/index",function(req,res){
  res.render("index");
});
router.get("/mybook/shop",function(req,res){
  res.render("shop");
});
router.get("/mybook/transport",function(req,res){
  res.render("transport");
});
router.get("/mybook/login",function(req,res){
  res.render("login");
});
router.get("/mybook/signup",function(req,res){
  res.render("signup");
});
router.get("/bk/shop",function(req,res){
  res.render("shop");
});
router.get("/bk/transport",function(req,res){
  res.render("transport");
});
router.get("/bk/login",function(req,res){
  res.render("login");
});
router.get("/bk/signup",function(req,res){
  res.render("signup");
});
router.get("/bk/index",function(req,res){
  res.render("index");
});







router.get("/flightcancellation",function(req,res){
  res.render("flightcancellation");
});
router.get("/flcl/index",function(req,res){
  res.render("index");
});

module.exports = router;
