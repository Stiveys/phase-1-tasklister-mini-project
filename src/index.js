document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskUser = document.getElementById("task-user").value;
    const taskDuration = document.getElementById("task-duration").value;
    const taskDueDate = document.getElementById("task-due-date").value;

    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `<strong>${taskDescription}</strong> - User: ${taskUser}, Duration: ${taskDuration} hours, Due: ${taskDueDate}`;

    // Create edit and delete buttons
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTaskItem);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newDescription = prompt("Edit your task:", taskDescription);
      if (newDescription) {
        newTaskItem.firstChild.textContent = newDescription;
      }
    });

    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(deleteButton);

    taskList.appendChild(newTaskItem);
    form.reset();
  });

  // Sorting functionality based on task duration
  document.getElementById("sort-tasks").addEventListener("click", () => {
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const durationA = parseInt(a.innerHTML.match(/Duration: (\d+)/)[1]);
      const durationB = parseInt(b.innerHTML.match(/Duration: (\d+)/)[1]);
      return durationA - durationB;
    });

    taskList.innerHTML = "";
    tasksArray.forEach(task => taskList.appendChild(task));
  });
});