//jshint esversion:6


const express= require('express');

const authController= require('../controllers/mybook');
const router= express.Router();

router.post("/myBookings",authController.myBookings);

module.exports = router;
