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

const key = 'TodoItem';
let todoItemArray = [];

if (localStorage.getItem(key)) {
    todoItemArray = JSON.parse(localStorage.getItem(key));
    todoItemArray.forEach((value)=>{
        const row = todoListItemTemplate.cloneNode(true);
        row.querySelector('td:first-child').innerText = value.comment;
        todoListItemWrap.append(row);
    })
}

addBtn.addEventListener('click', (event) => {

  event.preventDefault();
  event.stopPropagation();

  if (commentField.value) {
    const row = todoListItemTemplate.cloneNode(true);
    row.querySelector('td:first-child').innerText = commentField.value;

    todoListItemWrap.append(row);
    
    todoItemArray.push({"comment": commentField.value});
    localStorage.setItem(key, JSON.stringify(todoItemArray));
  }
  
});

 todoListWrap.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains("remove")) {
        const row = target.closest("tr");
        row.remove();

        todoItemArray = [];
        const commentElements = document.querySelectorAll('tbody .comment');

        commentElements.forEach((element)=>{
            const item = {"comment": element.innerText};
            todoItemArray.push(item);
        });
        localStorage.setItem(key, JSON.stringify(todoItemArray));
    }
  });

