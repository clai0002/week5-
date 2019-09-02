// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// // const url = 'mongodb://localhost:27017/'
// MongoClient.connect('mongodb://localhost:27017/', {useNewUrlParser: true}, function (err, client) {
//     if (err) {
//         console.log('Err  ', err);
//     } else {
//         console.log("Connected successfully to server");
//         db = client.db('fi2095tabe');
//     }
// });

// 1- ref --> mongodb module
let mongodb = require('mongodb');
// 2- get client from the ref
let MongoClient = mongodb.MongoClient
// 3- get access to db from the client
let url='';

mogodbclient.connect(url,{useNewUrlParser: true},function(err,client){
db= client.db('week5lec');
col=db.collection('customers');
col.insertOne({name:'Tim', age:23});
});
// 4- get access to collection from db
// 5- call insert, update, delete, find from collection