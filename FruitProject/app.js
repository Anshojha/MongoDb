//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitDb",{useNewUrlParser:true});



const fruitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , " I am requesting you to ente the name of fruit"],
    },
    rating : {
        type: Number,
        min :  1,
        max : 10
    },
    review : String 
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit  = new Fruit ({
    rating : 4,
    review : "Preety Solid love to eat"
});


fruit.save();       

// const personSchema = new mongoose.Schema({
//     name : String,
//     age : Number
// });

// const Person = mongoose.model("Person", personSchema);
// const person = new Person ({
//     name : "Aman",
//     age :"37"
// });


// person.save();

// const kiwi = new Fruit({
//     name : "kiwi",
//     score : 10,
//     review : "The best fruit to eat"
// });
// const orange = new Fruit({
//     name : "orange",
//     score : 11,
//     review : "The best fruit to eat and repeat"
// });
// const grape = new Fruit({
//     name : "grapes",
//     score : 12,
//     review : "The best fruit to eat"
// });


// Fruit.insertMany([kiwi , orange , grape], function(err){
//     if(err){
//         console.log("Error 420");
//     }else{
//         console.log("Succcfully added the fruits");
//     }
//  })

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


// Fruit.updateOne({_id:"642fb66fdaffe80a5aac00a7"} , {name : "Peach"} ,function (err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Updated Success Fully");
//     }
// });


Fruit.deleteOne({name : "Apple"}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log( "Succefully deleted")
    }
});