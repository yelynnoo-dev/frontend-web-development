const todoListWrap = document.querySelector('.todo');
const todoListItemWrap = todoListWrap.querySelector('tbody');
const addBtn = document.querySelector('[type="submit"]');
const commentField = document.querySelector('[name="comment"]');

const todoListItemTemplate = document.createElement('tr');
const commentTd = document.createElement('td');
const removeTd = document.createElement('td');
const removeBtn = document.createElement('button');

commentTd.classList.add('comment');
removeTd.classList.add('control');
removeBtn.classList.add('remove');

removeBtn.innerText = '削除';
removeTd.append(removeBtn);

todoListItemTemplate.append(commentTd, removeTd);

addBtn.addEventListener('click', (event) => {

  event.preventDefault();
  event.stopPropagation();

  if (commentField.value) {
    const row = todoListItemTemplate.cloneNode(true);
    row.querySelector('td:first-child').innerText = commentField.value;
    todoListItemWrap.append(row);
  }

  todoListWrap.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains("remove")) {
        const row = target.closetest("tr");
        row.remove();
    }
  });
});
