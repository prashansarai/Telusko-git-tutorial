var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('Keyup', filterItems);

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
    // var edtBtn = document.createElement('button');
    // edtBtn.className = "btn btn-sm float-right";
    // edtBtn.appendChild(document.createTextNode('E'));
    li.appendChild(dltBtn);
    // li.appendChild(edtBtn);
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
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'None';
        }
    });

}
 