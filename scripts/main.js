var myHeading = document.querySelector('h3');
myHeading.textContent = 'Jessy';

var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src")
    if (mySrc == 'images/jessy_photo.jpg'){
        myImage.setAttribute('src', 'images/Jessy_photo_2.jpg')
    } else {
        myImage.setAttribute('src', 'images/jessy_photo.jpg')
    }

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() { 
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is Jessy, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is Jessy, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}