/**
 * books.js
 * 
 * Midterm Exam - Favourite List App
 * Student Name: Melissa Dennis
 * Student ID: 301283465
 * Date: July 07, 2023
 * 
 * @link models/book.js
 * @file This file defines the models to create in the database
 * @author Melissa Dennis 
 * 
 */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
