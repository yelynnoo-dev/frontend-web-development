const title = document.getElementById("title");
const message = document.getElementById("message");
const showBtn = document.getElementById("showBtn");
const modalBtn = document.getElementById("modalBtn");
const infoDialog = document.getElementById("infoDialog");
const closeBtn = document.getElementById("closeBtn");

showBtn.onclick = function() {
    console.log("===== console.log()の場合 =====");
    console.log(title);
    console.log(message);
    console.dir("===== console.dir()の場合 =====");
    console.dir(title);
    console.dir(message);
    console.log(title.textContent);
    console.log(message.textContent);
}

modalBtn.onclick = function() {
    infoDialog.showModal();
}

closeBtn.onclick = function() {
    infoDialog.close();
}

// infoDialog.addEventListener("click", function(e) {
//     if (e.target === infoDialog) {
//         infoDialog.close();
//     }
// });