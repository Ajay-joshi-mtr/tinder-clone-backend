import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8001 
const connection_url = 'mongodb+srv://admin:<v804mi5v9xE5Qw4u>@tinder-clone.fhsl5.mongodb.net/tinderdb?retryWrites=true&w=majority';
// Middleware

// DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
// API Endpoints
app.get("/",(req,res)=>res.status(200).send("HELLO AJAY Joshi"));

// Listener
app.listen(port,()=> console.log(`listining on localhost:${port}`));

//admin
//v804mi5v9xE5Qw4u