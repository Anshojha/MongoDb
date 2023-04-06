//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitDb",{useNewUrlParser:true});



const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String 
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit  = new Fruit ({
    name : "Apple",
    rating : 7,
    review : "Preety Solid"
});


// fruit.save();

const personSchema = new mongoose.Schema({
    name : String,
    age : Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person ({
    name : "Aman",
    age :"37"
});


person.save();

const kiwi = new Fruit({
    name : "kiwi",
    score : 10,
    review : "The best fruit to eat"
});
const orange = new Fruit({
    name : "orange",
    score : 11,
    review : "The best fruit to eat and repeat"
});
const grape = new Fruit({
    name : "grapes",
    score : 12,
    review : "The best fruit to eat"
});


// Fruit.insertMany([kiwi , orange , grape], function(err){
//     if(err){
//         console.log("Error 420");
//     }else{
//         console.log("Succcfully added the fruits");
//     }
// })

Fruit.find(function(err , fruits){
    if(err){
        console.log("Error");
    }else{
        // console.log(fruits);
        // connection.mongoose.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }

});