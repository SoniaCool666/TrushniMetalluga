var myImage = document.querySelector('img');

myImage.onclick = function() {
    var myScr = myImage.getAttribute('src');
    if(myScr === 'images.jfif') {
        myImage.setAttribute ('src','cool.jpg');
    } else {
        myImage.setAttribute ('src','images.jfif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUsername() {
    var myName = prompt('Как тебя зовут?????');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добрый день, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветульки, ' + storedName;
}
myButton.onclick = function() {
    setUsername();
}