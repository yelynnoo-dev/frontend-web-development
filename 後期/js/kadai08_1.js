const userName = document.querySelector('#user_name');
const authorName = document.querySelector('#author_name');
const productUrl = document.querySelector('#product_url');
const videoUrl = document.querySelector('#video_url');
const productCategory = document.querySelector('#product_category');
const description = document.querySelector('#description');
const submitBtn = document.querySelector('[type="submit"]');

    userName.value = sessionStorage.getItem('userName');
    authorName.value = sessionStorage.getItem('authorName');
    productUrl.value = sessionStorage.getItem('productUrl');
    videoUrl.value = sessionStorage.getItem('videoUrl');
    productCategory.value = sessionStorage.getItem('productCategory');
    description.value = sessionStorage.getItem('description');
    

submitBtn.addEventListener('click', (event) => {

    event.preventDefault();
    event.stopPropagation();

    if (userName.value) {
        sessionStorage.setItem('userName', userName.value);
    }
    if (authorName.value) {
        sessionStorage.setItem('authorName', authorName.value);
    }
    if (productUrl.value) {
        sessionStorage.setItem('productUrl', productUrl.value);
    }
    if (videoUrl.value) {
        sessionStorage.setItem('videoUrl', videoUrl.value);
    }
    if (productCategory.value) {
        sessionStorage.setItem('productCategory', productCategory.value);
    }
    if (description.value) {
        sessionStorage.setItem('description', description.value);
    }

    alert('データを保存しました。');
});