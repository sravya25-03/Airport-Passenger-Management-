//jshint esversion:6


const express= require('express');

const authController= require('../controllers/pf');
const router= express.Router();

router.post("/profile",authController.profile);


module.exports = router;
