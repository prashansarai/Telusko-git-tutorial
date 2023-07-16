localStorage.setItem('name','Bob');
console.log(localStorage.getItem('name'));
//localStorage.removeItem('name');

sessionStorage.setItem('name','john');
sessionStorage.setItem('name','Bob');
console.log(localStorage.getItem('name'));
document.cookie = 'name=kyle';
let myObj = { name:'Domenic', age:56};
localStorage.setItem('myObj', myObj);
console.log(localStorage.getItem('myObj'));
let myObj_serialised = JSON.stringify(myObj);
console.log(myObj_serialised);
localStorage.setItem('myObj', myObj_serialised);
console.log(localStorage.getItem('myObj'));
let myObj_deserialised = JSON.parse(localStorage.getItem('myObj'));
console.log(myObj_deserialised);
localStorage.setItem('myObj', myObj_deserialised);
console.log(localStorage.getItem('myObj'));
