// localStorage.setItem('name','Bob');
// console.log(localStorage.getItem('name'));
// //localStorage.removeItem('name');

// sessionStorage.setItem('name','john');
// sessionStorage.setItem('name','Bob');
// console.log(localStorage.getItem('name'));
// document.cookie = 'name=kyle';
// let myObj = { name:'Domenic', age:56};
// localStorage.setItem('myObj', myObj);
// console.log(localStorage.getItem('myObj'));
// let myObj_serialised = JSON.stringify(myObj);
// console.log(myObj_serialised);
// localStorage.setItem('myObj', myObj_serialised);
// console.log(localStorage.getItem('myObj'));
// let myObj_deserialised = JSON.parse(localStorage.getItem('myObj'));
// console.log(myObj_deserialised);
// localStorage.setItem('myObj', myObj_deserialised);
// console.log(localStorage.getItem('myObj'));
var form = document.getElementById('addForm');
var nameVal = document.getElementById('name');
var emailVal= document.getElementById('email');
var phnVal= document.getElementById('phnno');
form.addEventListener('submit',showItems);
form.addEventListener('submit',showLists);
function showItems(e){
    e.preventDefault();
    let myObj = {'Name': nameVal.value, 'E-Mail': emailVal.value, 'Phn-No': phnVal.value};
    let myObj_serialised = JSON.stringify(myObj);
    localStorage.setItem(emailVal.value,myObj_serialised);
    console.log(localStorage.getItem(emailVal.value));
}
function showLists(e){
    e.preventDefault();
    var li = document.createElement('li');
    var ul = document.getElementById('items');
    li.className = "listItems";
    li.appendChild(document.createTextNode(nameVal.value +' - '+emailVal.value +' - '+phnVal.value));
    ul.appendChild(li);
}


