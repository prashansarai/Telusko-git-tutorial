localStorage.setItem('name','Bob');
console.log(localStorage.getItem('name'));
//localStorage.removeItem('name');

sessionStorage.setItem('name','john');
sessionStorage.setItem('name','Bob');
console.log(localStorage.getItem('name'));

document.cookie = 'name=kyle';


