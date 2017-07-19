// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');

    var state = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
    ]; // this is our initial todoList

    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        // you will need to use addEventListener


        // add span holding description
        var spanDescription = document.createElement('span');
        spanDescription.textContent = todo.description;
        todoNode.appendChild(spanDescription);

        // this adds the delete button
        var deleteButtonNode = document.createElement('button');

        var txt = document.createTextNode("\ ");
        deleteButtonNode.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        deleteButtonNode.className = "close";
        deleteButtonNode.appendChild(txt);
        todoNode.appendChild(deleteButtonNode);

        // add markTodo button


        // add classes for css

        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            // if (document.getElementsByName("description")[0].value)

            event.preventDefault();
            //var newDescription = document.getElementById("add-todo").description.value;
            var newDescription = document.getElementsByName("description")[0].value;
            var todoObject = {
                description: newDescription

            };

            var newState = todoFunctions.addTodo(state, todoObject);
            update(newState);
            document.getElementsByName("description")[0].value = "";


            // https://developer.mozilla.org/en-US/docs/Web/Events/submit
            // what does event.preventDefault do?
            //Returns a boolean indicating whether or not event.preventDefault() was called on the event.
            // what is inside event.target? - The entire form
            // hint: todoFunctions.addTodo
        });
    }

    // you should not need to change this function
    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    var renderState = function(state) {

        var todoListNode = document.createElement('ul');

        state.forEach(function(todo) {
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };

    if (container) renderState(state);
})();