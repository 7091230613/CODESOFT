const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
