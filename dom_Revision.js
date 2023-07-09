// console.log(document.URL);
// document.title = "Item Lister Updated";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.getElementById("header-title"));
var headerTitle = document.getElementById("header-title");
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHtml = "<h3>Heellou</h3>";
headerTitle.style.borderBottom = 'solid 3px #000000';
var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[3].style.backgroundColor = '#ffff00';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor='yellow';
for(var i =0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
var header = document.querySelector('main-header');
header.style.borderBottom='solid 4px #cccccc'
var input = document.querySelector('input');
input.value = 'Hello World'
var submit = document.querySelector("input[type="submit"]");
submit.value = "SEND"
// var item = document.querySelector('.list-group-item');
// items.style.color = "red";


