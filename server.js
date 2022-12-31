const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./db')
const tsunModel = require('./post')

const app = express();
connectDB();

app.use(express.json())
app.use(cors())
const PORT = 3000;


mongoose.connection.once('open', () =>{
    console.log('-------------------------------------------')
    console.log('Database connection is succesfull!')
    app.listen(PORT, () =>{console.log("Listening on port:"+PORT)});

})




app.get('/tsuns', (req,res) =>
{
    res.send("Yea, I'm the server");
})

app.post('/tsunadd', (req,res) =>
{
    /*var tsundata = req.body;
    console.log(tsundata);*/
    
    const post = new tsunModel({
        tsunName : req.body.tsunName,
        Gender : req.body.Gender,
        Affiliation : req.body.Affiliation,
        hairStyle : req.body.hairStyle,
        hairColor : req.body.hairColor,
        Type : req.body.Type
    })
    post.save();
    console.log(post);
    res.status(201).json({message : "Post added succesfully!"});
})

