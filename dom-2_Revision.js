var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
function addItem(e){
    e.preventDefault();
    // console.log(1);
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console.log(li);
    li.appendChild(document.createTextNode(newItem));
    var dltBtn = document.createElement('button');
    dltBtn.className = "btn btn-danger btn-sm float-right delete";
    dltBtn.appendChild(document.createTextNode('X'));
    var edtBtn = document.createElement('button');
    edtBtn.className = "btn btn-sm float-right";
    edtBtn.appendChild(document.createTextNode('E'));
    li.appendChild(dltBtn);
    li.appendChild(edtBtn);
    itemList.appendChild(li);    
}
 function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
 }