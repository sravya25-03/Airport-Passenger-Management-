//jshint esversion:6


const express= require('express');

const authController= require('../controllers/lg');
const router= express.Router();

router.post("/login",authController.login);


module.exports = router;
