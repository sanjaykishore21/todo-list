function addTask() {
  var Input = document.getElementById("taskInput");
  var task = Input.value;

  if (task === "") return;

  var List = document.createElement("li");
  List.textContent = task;

  var deleteli = document.createElement("button");
  deleteli.textContent = "Completed";

  deleteli.onclick = deleteTask;

  List.appendChild(deleteli);

  document.getElementById("taskList").appendChild(List);

  Input.value = "";
}

function deleteTask(event) {
  var li = event.target.parentElement;

  li.style.transition = "0.3s";
  li.style.opacity = "0";
  li.style.transform = "translateX(50px)";

  setTimeout(() => {
    li.remove();
  }, 300);
}

function toggleMode() {
  document.body.classList.toggle("dark");
}