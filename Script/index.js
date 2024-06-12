document.querySelector("#form").addEventListener("submit", myFunction);

var todoArr = JSON.parse(localStorage.getItem("todoList")) || [];

function myFunction(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;

  var qty = document.querySelector("#qty").value;

  var priority = document.querySelector("#Priority").value;

  var todoObj = {
    name: name,
    qty: qty,
    priority: priority,
  };

  todoArr.push(todoObj);
  console.log(todoArr);
  localStorage.setItem("todoList", JSON.stringify(todoArr));
}
