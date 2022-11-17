//jshint esversion:6


const express= require('express');

const authController= require('../controllers/fl');
const router= express.Router();

router.post("/flight",authController.flight);

module.exports = router;
