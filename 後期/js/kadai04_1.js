const feedbackForm = document.getElementById('feedbackForm');
const userName = document.getElementById('userName');
const userComment = document.getElementById('userComment');

feedbackForm.onsubmit = "submit",function (event) {

    event.preventDefault();
    const result = document.getElementById('result');
    
    const name = userName.value;
    const comment = userComment.value;

    result.textContent = `ご投稿ありがとうございます！お名前：${name}\tご意見：${comment}`;
    userName.value = '';
    userComment.value = '';
};