

// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    var newId = this.generateId();
    var newItem = {
      id: newId,
      description: newTodo.description,
      done: false
    };
    return todos.concat([newItem]);
    //This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
      var newArray = todos.map(function(el) {              //The map method creates a new array with the results of calling a function for every array element.
      return Object.assign({}, el);                        //method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
    });
    return newArray.filter(function(el) {  //The filter method creates an array filled with all array elements that pass a test,wihout affecting the original array
      return el.id !== idToDelete;
    });
  },

  markTodo: function(todos, idToMark) {
    var newArray = todos.map(function(obj) {
    var newObj =  Object.assign({}, obj);
    if (newObj.id === idToMark) newObj.done = !newObj.done;
    return newObj;
    });
    return newArray;

  },
  sortTodos: function(todos) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    var newArray = todos.map(function(el) {
    return Object.assign({}, el);
    });

    console.log(newArray);
    newArray.sort(function(a,b){
      if (a.done===true) {
          return -1 || a.id - b.id;
        }
        else if (a.done===false) return 1 || a.id - b.id ;

    })

    newArray.sort(function(a,b){
      if (a.done===false) 
          return  a.id - b.id;

    })



    return newArray;

  },
};




// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
