var express = require('express');
var router = express.Router();

var todos = [
  {
    idx: 1,
    task: 'create todo application',
    complete: false
  },
  {
    idx: 2,
    task: 'make todo nice',
    complete: false
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A simple todo application', 'todos': todos });
});

router.post('/', function(req, res, next) {
  var newTodo = {};
  newTodo.idx = todos.length + 1;
  newTodo.complete = false;
  newTodo.task = req.body.todo;
  todos.push(newTodo);
  console.log(todos);
  res.redirect("/");
});

module.exports = router;
