const openItemDialog = document.querySelector('#openItemDialog');
const contentWrap = document.querySelector('#contentWrap');
const itemList = contentWrap.querySelector('#itemList tbody');

const itemDialog = document.querySelector('#itemDialog');
const addItemForm = itemDialog.querySelector('#addItemForm');
const itemId = addItemForm.querySelector('[name="itemId"]');
const itemName = addItemForm.querySelector('[name="itemName"]');
const itemDescription = addItemForm.querySelector('[name="itemDescription"]');
const itemPrice = addItemForm.querySelector('[name="itemPrice"]');
const submitBtn = addItemForm.querySelector('[type="submit"]');

const closeBtn = itemDialog.querySelector('.material-icons');

const key = 'TodoItem';
let todoItemArray = [];

const createItemRow = (item) => {
    const itemRow = document.createElement('tr');
    const idTd = document.createElement('td');
    const nameTd = document.createElement('td');
    const descriptionTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const controlTd = document.createElement('td');
    const remove = document.createElement('button');

    idTd.innerText = item.id;
    nameTd.innerText = item.name;
    descriptionTd.innerText = item.description;
    priceTd.innerText = item.price;

    remove.innerText = '削除';
    remove.classList.add('remove');
    controlTd.append(remove);
    
    itemRow.append(idTd, nameTd, descriptionTd, priceTd, controlTd);
    return itemRow;
};

const updateLocalStorage = () => {
    todoItemArray = [];
    const itemRows = itemList.querySelectorAll('tr');
    itemRows.forEach((row) => {
        const id = row.children[0].innerText;
        const name = row.children[1].innerText;
        const description = row.children[2].innerText;
        const price = row.children[3].innerText;
        todoItemArray.push({ "id": id, "name": name, "description": description, "price": price });
    });
    localStorage.setItem(key, JSON.stringify(todoItemArray));
};

openItemDialog.addEventListener('click', () => {
    itemDialog.showModal();
});

const savedData = localStorage.getItem(key);
if (savedData !== null) {
    itemList.innerHTML = ''; 
    todoItemArray = JSON.parse(savedData);
    todoItemArray.forEach((value) => {
        const row = createItemRow(value);
        itemList.append(row);
    });
} else {
    updateLocalStorage();
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (itemId.value && itemName.value && itemDescription.value && itemPrice.value) {
        const newItem = {
            "id": itemId.value, 
            "name": itemName.value, 
            "description": itemDescription.value, 
            "price": `¥${itemPrice.value}`
        };
        
        const itemRow = createItemRow(newItem);
        itemList.append(itemRow);

        addItemForm.reset();
        itemDialog.close();

        updateLocalStorage();
    }
});

itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
            updateLocalStorage(); 
        }
    }
});

closeBtn.addEventListener('click', () => {
    itemDialog.close();
});