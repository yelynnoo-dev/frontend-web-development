const content = document.querySelector('#content');
const todoListWrap = document.querySelector(".todo");
const todoListItemWrap = todoListWrap.querySelector("tbody");
const addBtn = document.querySelector("[type=submit]");
const commentField = document.querySelector("[name=comment]");

addBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (commentField.value) {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td class="comment">${commentField.value}</td>
        <td class="control">
          <button class="delete">削除</button>
        </td>
      `;
        todoListItemWrap.append(row);
        
        const deleteButton = row.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            row.remove();
        });
        commentField.value = "";
    }

});
