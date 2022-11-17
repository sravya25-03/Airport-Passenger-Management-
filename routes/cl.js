//jshint esversion:6


const express= require('express');

const authController= require('../controllers/cl');
const router= express.Router();

router.post("/cancel",authController.cancel);


module.exports = router;
