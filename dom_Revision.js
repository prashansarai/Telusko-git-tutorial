// console.log(document.URL);
// document.title = "Item Lister Updated";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHtml = "<h3>Heellou</h3>";
// headerTitle.style.borderBottom = 'solid 3px #000000';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[3].style.backgroundColor = '#ffff00';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor='yellow';
// for(var i =0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #cccccc';
// var input = document.querySelector('input');
// input.value = 'Hello World'
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"
// var item = document.querySelector('.list-group-item');
// item.style.color = "red";
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd= document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#00ff00';}
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#ffd3ff';
console.log(itemList.parentElement.parentElement);
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
console.log(itemList.nextSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id='hello1';
newDiv.setAttribute('title', 'Hello Div');
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container'); 
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
console.log(newDiv);
container.insertBefore(newDiv, h1);
var newLi= document.createElement('li'); 
newLi.className = "list-group-item";
var newLiText = document.createTextNode('Hello');
newLi.appendChild(newLiText);
console.log(newLi);
















