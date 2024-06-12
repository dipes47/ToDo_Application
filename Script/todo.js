var todoArr = JSON.parse(localStorage.getItem("todoList"));
var completed = JSON.parse(localStorage.getItem("CompletedTodo's")) || [];
console.log(todoArr);

todoArr.map(function (elem, index, array) {
  var tbody = document.querySelector("#body");
  var tr1 = document.createElement("tr");
  //   var tr2 = document.createElement("tr");
  //   var tr3 = document.createElement("tr");
  //   var tr4 = document.createElement("tr");
  //   var tr5 = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = elem.name;
  var td2 = document.createElement("td");
  td2.textContent = elem.qty;
  var td3 = document.createElement("td");
  td3.textContent = elem.priority;

  var btn = document.createElement("button");
  btn.innerText = "Mark complete";
  btn.style.fontSize = "20px";
  btn.style.backgroundColor = "teal";
  btn.style.color = "white";
  btn.style.borderRadius = "6px";
  btn.addEventListener("click", function () {
    markComplete(elem);
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = "black";
  });

  tr1.append(td1, td2, td3, btn);
  tbody.append(tr1);
});

function markComplete(elem) {
  console.log(elem);
  completed.push(elem);
  localStorage.setItem("CompletedTodo's", JSON.stringify(completed));
}
