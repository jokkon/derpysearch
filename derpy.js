document.getElementById("writy_functionality").onclick = function() {writy();};
document.getElementById("full_functionality").onclick = function() {writy(); printy();};

var variable = document.getElementById("derpterm").value


function writy() {
  document.write("glargh");
}

function printy() {
  window.print();
}

function writyprinty() {
  document.write("variable");
  window.print();
}
