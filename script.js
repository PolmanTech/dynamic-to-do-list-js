
document.addEventListener('DOMContentLoaded', () => {
    // addTask();
    loadTasks();
})

let taskText;

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach((taskText, index) => {
        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button element
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Make removeBtn delete tasks
        removeBtn.onclick = () => {
            li.style.display = "none";
            storedTasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(storedTasks))
            location.reload();
        }
        // Append button to li
        li.appendChild(removeBtn);
        // Append li to taskList
        taskList.appendChild(li);
    }); // 'false' indicates not to save again to Local Storage
}

// Selecting the DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// Add task Function
function addTask(taskText, save = true) {
    taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText != "") {
        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button element
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

        // Make removeBtn delete tasks
        removeBtn.onclick = () => {
            li.style.display = 'none';
        }

        // Append button to li
        li.appendChild(removeBtn);
        // Append li to taskList
        taskList.appendChild(li);

        // Task creation logic remains the same
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
        // Clear the input
        taskInput.value = "";
        location.reload();

    } else {
        alert("Enter a task!");
    }
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});
