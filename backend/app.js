//importing express
const express = require('express');

//importing db model
const User = require('./dbModel/model');

//load the contents of that file as environment variables:
require('dotenv').config()

//Connecting to the database with TLS
//Connecting to your database with TLS encrypts all network data between the MongoDB server and client.
const {MongoClient} = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
(async()=>{
    try {
        await client.connect(err => {
            const collection = client.db("UserData").collection("User");
            console.log(collection)
            // perform actions on the collection object
            client.close();
          });
    } catch (error) {
        console.log('Error: ', error.message);
    }
})();

//create new express app and save it as app
const app = express();
const PORT = process.env.PORT || 5000;


//connecting mongoose to mongodb database using a url and port
// Atlas cloud database cluster url



//listening to port and host
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})