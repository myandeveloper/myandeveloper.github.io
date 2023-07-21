// script.js

// JavaScript code
document.querySelector('#search-box button').addEventListener('click', function () {
  var query = document.querySelector('#search-box input[type="text"]').value;
  var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  window.open(url, '_blank');
});

document.querySelector('#web-address button').addEventListener('click', function () {
  var webAddress = document.querySelector('#web-address input[type="text"]').value;
  if (webAddress !== '' && !webAddress.startsWith('http://') && !webAddress.startsWith('https://')) {
    webAddress = 'https://' + webAddress;
  }
  window.location.href = webAddress;
});

var logo = document.querySelector('#logo');
var clickCount = 0;
var timer;

logo.addEventListener('click', function () {
  clickCount++;
  if (clickCount === 3) {
    window.location.href = 'contact.html';
    clearTimeout(timer);
  } else {
    clearTimeout(timer);
    timer = setTimeout(function () {
      clickCount = 0;
    }, 2000);
  }
});

// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable inspecting
document.addEventListener('keydown', function (e) {
  // Use F12 key to prevent the inspecting
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});

