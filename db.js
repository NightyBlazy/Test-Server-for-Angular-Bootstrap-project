const mongoose = require('mongoose')
require('dotenv').config();


const mongoString = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(mongoString, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
        
    }
    catch (err){
        console.error(err);
    }
}


module.exports = connectDB;















/*
module.exports = {
    connectToDb : (cb) => {
        MongoClient.connect(mongoString)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err =>{
            console.log(err);
            return cb(err);
        })

    },
    getDB : () => dbConnection


}*/