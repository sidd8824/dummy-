const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const summary = document.getElementById("summary");

function updateSummary() {
  const total = list.children.length;
  const done = list.querySelectorAll("li.done").length;
  summary.textContent = total === 0
    ? "No tasks yet"
    : done + " of " + total + " tasks done";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const li = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = input.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";

  // click the task to mark it done / not done
  li.addEventListener("click", function () {
    li.classList.toggle("done");
    updateSummary();
  });

  // delete button removes the task
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    updateSummary();
  });

  li.appendChild(text);
  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = "";
  updateSummary();
});