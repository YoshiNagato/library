var author = document.getElementById("author");
var title = document.getElementById("title");
var pages = document.getElementById("pages");

const addBookDialog = document.getElementById("addBook");
const dialog = document.getElementById("mainDialog");
const cancelDialog = document.getElementById("cancel");

addBookDialog.addEventListener('click',() => {
    dialog.showModal();
})

cancelDialog.addEventListener('click',() =>
    dialog.close());

console.log(`${author}, ${title},${pages}`);