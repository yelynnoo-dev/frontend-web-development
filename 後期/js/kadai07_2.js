const openItemDialog = document.querySelector('#openItemDialog');
const contentWrap = document.querySelector('#contentWrap');
const itemList = contentWrap.querySelector('#itemList');

const itemDialog = document.querySelector('#itemDialog');
const addItemForm = itemDialog.querySelector('#addItemForm');
const itemId = addItemForm.querySelector('[name="itemId"]');
const itemName = addItemForm.querySelector('[name="itemName"]');
const itemDescription = addItemForm.querySelector('[name="itemDescription"]');
const itemPrice = addItemForm.querySelector('[name="itemPrice"]');
const submitBtn = addItemForm.querySelector('[type="submit"]');

const closeBtn = itemDialog.querySelector('.material-icons');

openItemDialog.addEventListener('click', () => {
    itemDialog.showModal();
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (itemId.value && itemName.value && itemDescription.value && itemPrice.value) {
        
        const itemRow = document.createElement('tr');
        const idTd = document.createElement('td');
        const nameTd = document.createElement('td');
        const descriptionTd = document.createElement('td');
        const priceTd = document.createElement('td');
        const controlTd = document.createElement('td');
        const remove = document.createElement('button');

        idTd.innerText = itemId.value;
        nameTd.innerText = itemName.value;
        descriptionTd.innerText = itemDescription.value;
        priceTd.innerText = itemPrice.value;
        
        remove.innerText = '削除';
        remove.classList.add('remove');
        
        controlTd.append(remove);
        itemRow.append(idTd, nameTd, descriptionTd, priceTd, controlTd);
        itemList.append(itemRow);
        
        addItemForm.reset(); 

        itemDialog.close();
    }
});

itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }
});

closeBtn.addEventListener('click', () => {
    itemDialog.close();
});
