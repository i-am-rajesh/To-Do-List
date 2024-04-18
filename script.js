// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event listener for adding a new task
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

// Function to add a new task
function addTask(taskText) {
    // Create a list item
    const li = document.createElement("li");
    $(li).css('list-style-type','none')
    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    // Create a label 
    const label = document.createElement("label");
    label.textContent = taskText;

    // Create edit button
    const  editBtn = document.createElement("button")
    editBtn.textContent = 'edit';
    editBtn.classList.add("edit-btn");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-outline-danger");
    editBtn.addEventListener('click',function(){
        editTask(label);
    })
    
    // Append the checkbox, label, and edit button to the list item
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(editBtn)
    
    // Append the list item to the task list
    taskList.appendChild(li);
}

// Marking a task as completed
taskList.addEventListener("change", function(event) {
    if (event.target.classList.contains("task-checkbox")) {
        const checkbox = event.target;
        const listItem = checkbox.parentNode;
        
        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    }
});

//  Edit a task
function editTask(lable){
    const newTask =prompt("Edit task: ",lable.textContent);
    if(newTask!=null){
        lable.textContent = newTask;
        lable.parentNode.classList.remove("completed")
        $(document).ready(function(){
            // Uncheck the checkbox
            $('.task-checkbox').prop('checked', false);
          });
    }else{
        alert("Task field can't be null")
    }
}
// refresh page to clear all
function refresh(){
    location.reload()
}