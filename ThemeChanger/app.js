const blue = document.getElementById("blue");
blue.addEventListener("click", function() {
    document.getElementById('textarea').style.backgroundColor = 'blue';
    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'blue';
    document.getElementsByTagName('textarea')[0].style.borderColor = 'white';
});
const green = document.getElementById("green");
green.addEventListener("click", function() {
    document.getElementById('textarea').style.backgroundColor = 'green';
    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'green';
    document.getElementsByTagName('textarea')[0].style.borderColor = 'white';
});
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", function() {
    document.getElementById('textarea').style.backgroundColor = 'yellow';
    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'yellow';
    document.getElementsByTagName('textarea')[0].style.borderColor = 'black';
});
const dark = document.getElementById("dark");
dark.addEventListener("click", function() {
    document.getElementById('textarea').style.backgroundColor = 'black';
    document.getElementsByTagName('textarea')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('textarea')[0].style.borderColor = 'white';
});