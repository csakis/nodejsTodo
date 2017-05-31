var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongo = require("./db")
var ObjectId = require('mongodb').ObjectId;


/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.db.collection("todos")
    .find()
    .toArray(function (err, todos) {
      if(err) throw err;
      res.render('index', { title: 'A simple todo application', 'todos':todos });
    })
 
});

router.post('/addTask', function(req, res, next) {
  var newTodo = {};
  newTodo.task = req.body.task;
  newTodo.complete = false;
  mongo.db.collection("todos")
    .insert(newTodo, function(err, result) {
        if (err) throw err;
        res.status(200).send("OK");
    });
  
});

router.post('/update/', function(req, res, next) {
 
  mongo.db.collection("todos")
    .updateOne({_id: ObjectId(req.body.index)}, {$set: {complete: (req.body.complete === "false")}}, function(err, result){
         if (err) throw err;
        res.status(200).send("OK");
    });     
});

router.post('/removeComplete/', function(req, res, next) {
    mongo.db.collection("todos")
        .remove({complete: true}, function(err, result) {
        if (err) throw err;
        res.status(200).send("OK");
    });
});
module.exports = router;
