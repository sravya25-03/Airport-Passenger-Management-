//jshint esversion:6


const express= require('express');

const authController= require('../controllers/auth');
const router= express.Router();
const router1=express.Router();



router.post("/signup",authController.signup);


module.exports = router;
