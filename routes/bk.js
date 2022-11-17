//jshint esversion:6

const express= require('express');

const authController= require('../controllers/bk');
const router= express.Router();


router.post("/booking",authController.booking);


module.exports = router;
