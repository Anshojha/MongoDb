//jshint esversion:6

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'fruitsDB';

const client = new MongoClient(url);

// client.connect(function(err){
//     assert.equal(null,err);
//     console.log("Connected successfully to the server!!");

//     const db = client.db(dbName);

//     insertDocuments(db ,function(){
//         client.close();
//     });
// });

mongoose.connect('mongodb://localhost:27017//fruitsDB');
const insertDocuments = function(db,callback){
    const collection= db.collection('fruits');
    collection.insertMany([
        {
            name :"apple",
            score :6,
            review : "Sour in test"
        },
        {
            name: "orange",
            score:5,
            review :"Tasty"
        }
    ],function(err,result){
        assert.equal(err,null);
        assert.equal(3,result.result.n);
        assert.equal(3,result.ops.length);
        console.log("Inserted 3 documents into the Collections");
        callback(result);
    });
}