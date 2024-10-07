document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newTaskDescription = document.getElementById("new-task-description").value;

    if (newTaskDescription !== "") {
      const taskItem = document.createElement("li");

      taskItem.textContent = newTaskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskItem.remove();  // Remove the task when delete button is clicked
      });

      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      document.getElementById("new-task-description").value = "";
    }
  });
});
