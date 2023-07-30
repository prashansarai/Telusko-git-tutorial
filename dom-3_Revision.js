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

form.addEventListener('submit',showLists);

function showLists(e){
    e.preventDefault();
    var li = document.createElement('li');
    var ul = document.getElementById('items');
    var dltBtn = document.createElement('button');
    var edtBtn = document.createElement('button');
    dltBtn.className = 'btn dlt';
    edtBtn.className = 'btn edt';
    dltBtn.appendChild(document.createTextNode('Delete'));
    edtBtn.appendChild(document.createTextNode('Edit'));
    dltBtn.style.backgroundColor= '#f40000';
    edtBtn.style.backgroundColor= '#f4f4f4'
    li.className= 'listItems';
    var nameVal = e.target.username.value;
    var emailVal= e.target.email.value;
    var phnVal= e.target.phnno.value;
    var myObj = {nameVal,emailVal,phnVal};
    var myObj_serialised = JSON.stringify(myObj);
    localStorage.setItem(myObj.emailVal,myObj_serialised);
    li.appendChild(document.createTextNode(myObj.nameVal +' - '+ myObj.emailVal +' - '+ myObj.phnVal));
    li.appendChild(dltBtn);
    li.appendChild(edtBtn);
    ul.appendChild(li);
    dltBtn.onclick = () =>{
        localStorage.removeItem(myObj.emailVal);
        ul.removeChild(li);
    }
    edtBtn.onclick = () =>{
        document.getElementById('username').value = myObj.nameVal;
        document.getElementById('email').value  = myObj.emailVal;
        document.getElementById('phnno').value  = myObj.phnVal;
        localStorage.removeItem(myObj.emailVal);
        ul.removeChild(li);
    }
}
