/**
 * index.js
 * 
 * Midterm Exam - Favourite List App
 * Student Name: Melissa Dennis
 * Student ID: 301283465
 * Date: July 07, 2023
 * 
 * @link routes/index.js
 * @file This file defines the routes to navigate the page and included the "Home" Page.
 * @author Melissa Dennis 
 * 
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
