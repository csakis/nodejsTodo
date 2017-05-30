var express = require('express');
var router = express.Router();

var todos = [
  {
    task: 'create todo application',
    complete: false
  },
  {
    task: 'make todo nice',
    complete: true
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A simple todo application', 'todos': todos });
});

router.post('/', function(req, res, next) {
  var newTodo = {};
  newTodo.task = req.body.todo;
  newTodo.complete = false;
  todos.push(newTodo);
  res.redirect("/");
});

router.post('/update/', function(req, res, next) {
  todos[req.body.index].complete = todos[req.body.index].complete ? false : true;
  console.dir(todos);
  res.status(200).send();
});
router.post('/removeComplete/', function(req, res, next) {
  var newTodos = [];
  for (var i=0;i<todos.length; i++) {
    if (!todos[i].complete) {
      newTodos.push(todos[i]);
    }
  }
  todos = newTodos;
  res.status(200).send();
});


module.exports = router;
