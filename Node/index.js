const express= require('express');
const app=express();
const mongoose= require('mongoose');
var cors = require('cors')
const dotenv =require('dotenv');
const auth=require('./routes/node');
const posts = require('./routes/Vehicles');
dotenv.config();
const uri = "mongodb+srv://pratikpatil:UZuRNHiMilGMbx6F@cluster0.7ce3jhh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri,()=>console.log("connece"));
app.use(express.json());
app.use(cors());
app.use('/api',posts);
app.listen(3000,()=>console.log("server is running"))