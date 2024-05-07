function addTodo() {
    //step one, get input element and its value
    const input = document.getElementById("todo-input")
    // get value and trim white space
    const inputValue = input.value.trim();

    //check to see if the input value isn't empty
    if (inputValue !== "") {
        //create a new list item
        //get unordered list:
        const todoList = document.getElementById("todo-list");
        //create list item using createElement:
        const li = document.createElement("li");
        //create a checkbox using createElement
        const checkbox = document.createElement("input");
        //set checkbox input to checkbox
        checkbox.type = "checkbox";
        // create a textNode that uses the input value
        const textNode = document.createTextNode(inputValue);

        //append checkbox and textNode to list item
        li.appendChild(checkbox);
        li.appendChild(textNode);
        //append the li to the ul of todo list
        todoList.appendChild(li);
    } else {
        //alert user if value is empty
        alert("Please enter a valid To Do Item");
    }
}