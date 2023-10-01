// JavaScript code for handling task management functionality

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-ul");
    const addTaskBtn = document.getElementById("add-task-btn");

    addTaskBtn.addEventListener("click", function () {
        const taskName = document.getElementById("task-name").value;
        const developerName = document.getElementById("developer-name").value;
        const dueDate = document.getElementById("due-date").value;

        // Create a new task item
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskName}</span>
            <span>${developerName}</span>
            <span>${dueDate}</span>
            <div class="progress-bar"></div>
            <button class="complete-btn">Complete</button>
        `;

        // Add the task item to the task list
        taskList.appendChild(taskItem);

        // Clear input fields
        document.getElementById("task-name").value = "";
        document.getElementById("developer-name").value = "";
        document.getElementById("due-date").value = "";
    });
});
