function clearScreen() {
    document.getElementById("getresult").value = "";
}
function display(value) {
    document.getElementById("getresult").value += value;
} 
function calculate() {
    var p = document.getElementById("getresult").value;
    var q = eval(p);
    document.getElementById("getresult").value = q;
}