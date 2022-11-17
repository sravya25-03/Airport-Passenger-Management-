//jshint esversion:6


const express= require('express');

const authController= require('../controllers/tk');
const router= express.Router();

router.post("/ticket",authController.ticket);


module.exports = router;
