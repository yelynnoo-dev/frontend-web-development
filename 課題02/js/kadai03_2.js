const loginBtn = document.getElementById('loginBtn');
const loginDialog = document.getElementById('loginDialog');
const closeBtn = document.getElementById('closeBtn');

loginBtn.onclick = function () {
    loginDialog.showModal();
}

closeBtn.onclick = function () {
    loginDialog.close();
}

// loginDialog.addEventListener("click", function (e) {
//     if (e.target === loginDialog) {
//         loginDialog.close();
//     }
// });