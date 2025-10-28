const loginBtn = document.getElementById('loginBtn');
const loginDialog = document.getElementById('loginDialog');
const closeBtn = document.getElementById('closeBtn');


function openLoginDialog() {
   loginDialog.showModal();
}
loginBtn.addEventListener('click', openLoginDialog);

function closeLoginDialog() {
    loginDialog.close();
}
closeBtn.addEventListener('click', closeLoginDialog);

function handleOutsideClick(event) {
    if (event.target === loginDialog) {
         loginDialog.close();
    }
}
document.addEventListener('click', handleOutsideClick);