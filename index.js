const express=require("express");
const {default: mongoose }=require("mongoose");
const  product= require("./models/ProductModel");
const app=express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

mongoose.connect('');
