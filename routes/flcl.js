//jshint esversion:6


const express= require('express');

const authController= require('../controllers/flcl');
const router= express.Router();

router.post("/flightcancellation",authController.flightcancellation);

module.exports = router;
