document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("task-priority").value;

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskDescription;

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


  document.getElementById("sort-tasks").addEventListener("click", () => {
    const tasksArray = Array.from(taskList.children);

    tasksArray.sort((a, b) => {
      const priorityA = a.style.color === "red" ? 3 : a.style.color === "yellow" ? 2 : 1;
      const priorityB = b.style.color === "red" ? 3 : b.style.color === "yellow" ? 2 : 1;
      return priorityA - priorityB;
    });

    taskList.innerHTML = "";
    tasksArray.forEach(task => taskList.appendChild(task));
  });
});