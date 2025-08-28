const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="completeBtn">✔</button>
      <button class="deleteBtn">✖</button>
    </div>
  `;

  // Complete task
  li.querySelector(".completeBtn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
