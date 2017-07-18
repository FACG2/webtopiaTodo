var test = require('tape');
var todoFunctions = require('./logic');
var tt=[];
var todoList = [
{id: 0, description: 'make tea', done: false},
{id: 1, description: 'make eggs', done: true},
{id: 2, description: 'make coffee', done: false},
{id: 3, description: 'make launch', done: true},
{id: 4, description: 'make dinner', done: false},
{id: 5, description: 'make food', done: true},
];

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

test('should return the same array', function (t) {
  t.deepEqual(todoFunctions.markTodo(todoList,0),
  [{id: 0, description: 'make tea', done: true},
  {id: 1, description: 'make eggs', done: true},
  {id: 2, description: 'make coffee', done: false},
  {id: 3, description: 'make launch', done: true},
  {id: 4, description: 'make dinner', done: false},
  {id: 5, description: 'make food', done: true},]);
  t.end();
});

test('should return an array after marking the task', function (t) {
  t.deepEqual(todoList,[
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make eggs', done: true},
    {id: 2, description: 'make coffee', done: false},
    {id: 3, description: 'make launch', done: true},
    {id: 4, description: 'make dinner', done: false},
    {id: 5, description: 'make food', done: true},
  ]);
  t.end();
});

test('should return an array after marking the task', function (t) {
  t.deepEqual(todoFunctions.markTodo(todoList,1),
  [{id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: false},
  {id: 2, description: 'make coffee', done: false},
  {id: 3, description: 'make launch', done: true},
  {id: 4, description: 'make dinner', done: false},
  {id: 5, description: 'make food', done: true},]);
  t.end();
});

// Sort test

test('should return an array after sorting the task', function (t) {
  t.deepEqual(todoFunctions.sortTodos(todoList),
    [{id: 1, description: 'make eggs', done: true},
    {id: 3, description: 'make launch', done: true},
    {id: 5, description: 'make food', done: true},
    {id: 0, description: 'make tea', done: false},
    {id: 2, description: 'make coffee', done: false},
    {id: 4, description: 'make dinner', done: false}
  ]);
  t.end();
});


test('should return an array after sorting the task', function (t) {
  t.deepEqual(todoFunctions.markTodo(todoList,0),
  [{id: 0, description: 'make tea', done: true},
  {id: 1, description: 'make eggs', done: true},
  {id: 2, description: 'make coffee', done: false},
  {id: 3, description: 'make launch', done: true},
  {id: 4, description: 'make dinner', done: false},
  {id: 5, description: 'make food', done: true},]);
  t.end();
});
