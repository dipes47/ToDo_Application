var completed = JSON.parse(localStorage.getItem("CompletedTodo's"));

completed.map(function (elem, index, array) {
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

  tr1.append(td1, td2, td3);
  tbody.append(tr1);
});
