var express = require('express');
var router = express.Router();
var todos = require("./data").todos;
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A simple todo application', 'todos':todos });
});

router.post('/addTask', function(req, res, next) {
  var newTodo = {};
  newTodo.task = req.body.task;
  newTodo.complete = false;
  todos.push(newTodo);
  fs.writeFile('./routes/data.js', "module.exports = { todos: " + JSON.stringify(todos) + "}", function (err) {
    if (err) throw err;
    res.status(200).send("OK");
  });
});

router.post('/update/', function(req, res, next) {
  todos[req.body.index].complete = todos[req.body.index].complete ? false : true;
  fs.writeFile('./routes/data.js', "module.exports = { todos: " + JSON.stringify(todos) + "}", function (err) {
    if (err) throw err;
    res.status(200).send("OK");
  });
});

router.post('/removeComplete/', function(req, res, next) {
  var newTodos = [];
  for (var i=0;i<todos.length; i++) {
    if (!todos[i].complete) {
      newTodos.push(todos[i]);
    }
  }
  todos = newTodos;
  fs.writeFile('./routes/data.js', "module.exports = { todos: " + JSON.stringify(todos) + "}", function (err) {
    if (err) throw err;
    res.status(200).send("OK");
  });
});
module.exports = router;
