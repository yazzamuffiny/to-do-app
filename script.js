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

//add event listener to the add button to add a new todo item
document.getElementById("add-button").addEventListener("click", addTodo);

//event listener to mark todo items as completed

// change event on the todo item
document.getElementById("todo-list").addEventListener("change", function(event) {
    //check if the event trigger was a checkbox
    if (event.target.type === "checkbox") {
        //get the parent item of the checkbox
        const listItem = event.target.parentNode;
        //check if checkbox is checked or not
        if (event.target.checked) {
            //apply line-through style when checkbox is checked:
            listItem.style.textDecoration = "line-through";
        } else {
            //remove the line through when unchecked
            listItem.style.textDecoration = "none";
        }
    }
});