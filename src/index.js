document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Listen for the submit event on the form
  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the task description and priority
    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;

    // Create a new list item for the task
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskDescription;

    // Set text color based on priority
    if (taskPriority === "high") {
      newTaskItem.style.color = "red";
    } else if (taskPriority === "medium") {
      newTaskItem.style.color = "yellow";
    } else {
      newTaskItem.style.color = "green";
    }

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTaskItem);
    });

    // Create an edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newDescription = prompt("Edit your task:", taskDescription);
      if (newDescription) {
        newTaskItem.firstChild.textContent = newDescription; // Update the task description
      }
    });

    // Append buttons to the task item
    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(deleteButton);

    // Append the new task to the task list
    taskList.appendChild(newTaskItem);

    // Clear the input fields
    form.reset();
  });

  // Sorting functionality
  document.getElementById("sort-tasks").addEventListener("click", () => {
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const priorityA = a.style.color === "red" ? 3 : a.style.color === "yellow" ? 2 : 1;
      const priorityB = b.style.color === "red" ? 3 : b.style.color === "yellow" ? 2 : 1;
      return priorityA - priorityB;
    });

    // Clear the task list and re-append sorted tasks
    taskList.innerHTML = "";
    tasksArray.forEach(task => taskList.appendChild(task));
  });
});