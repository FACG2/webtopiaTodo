var test = require('tape');
var todoFunctions = require('./logic');
var tt=[];


test('add to do', function(t){
  var actual = todoFunctions.addTodo([],{ description: 'make tea' });
  var expected=[{id: 1, description: 'make tea', done: false}];
  t.deepEqual(actual,expected, "ToDo Added!");
  t.end();
});

test('add to do', function(t){
  var actual = todoFunctions.addTodo(tt,{ description: 'make tea' });
  var expected=[{id: 2, description: 'make tea', done: false}];
  t.deepEqual(actual,expected, "Input unchanged");
  t.end();
});

test('add to do', function(t){
  var actual = tt;
  var expected=[];
  t.deepEqual(actual,expected, "Input unchanged");
  t.end();
});


var todoList = [
{id: 0, description: 'make tea', done: false},
{id: 1, description: 'make eggs', done: true},
{id: 2, description: 'make coffee', done: false},
{id: 3, description: 'make launch', done: true},
{id: 4, description: 'make dinner', done: false},
{id: 5, description: 'make food', done: true},
]

test('delete to do', function(t){
  var actual = todoFunctions.deleteTodo(todoList, 0 );
  var expected=[{id: 1, description: 'make eggs', done: true},
{id: 2, description: 'make coffee', done: false},
{id: 3, description: 'make launch', done: true},
{id: 4, description: 'make dinner', done: false},
{id: 5, description: 'make food', done: true},
];
  t.deepEqual(actual,expected, "ToDo Deleted!");
  t.end();
});

test('delete to do', function(t){
  var actual = todoList;
  var expected=[
{id: 0, description: 'make tea', done: false},
{id: 1, description: 'make eggs', done: true},
{id: 2, description: 'make coffee', done: false},
{id: 3, description: 'make launch', done: true},
{id: 4, description: 'make dinner', done: false},
{id: 5, description: 'make food', done: true},
];
  t.deepEqual(actual,expected, "ToDo Deleted!");
  t.end();
});


// test('delete to do', function(t){
//   var actual = todoFunctions.deleteTodo([],{ id:1 });
//   var expected=[{id: 1, description: 'make tea', done: false}];
//   t.deepEqual(actual,expected, "ToDo Deleted!");
//   t.end();
// });

