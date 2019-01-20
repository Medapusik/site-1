// Notes like this in JS

var myButton = document.querySelector('button');
var myWelcome = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myWelcome.innerHTML = 'Welcome, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myWelcome.innerHTML = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}