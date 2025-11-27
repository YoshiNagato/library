const addBookDialog = document.getElementById("addBook");
const dialog = document.getElementById("mainDialog");
const cancelDialog = document.getElementById("cancel");
const addNewBook = document.getElementById("submit");
const bookContainer = document.getElementById("bookContainer");
const bookWrapper = document.getElementById("bookWrapper");
const changeBtn = document.getElementById("changeBtn");
const deleteBtn = document.getElementById("deleteBtn");
const readStatus = document.getElementById("status");
const myLibrary = [];

addBookDialog.addEventListener('click',() => {
    dialog.showModal();
})

cancelDialog.addEventListener('click',() =>
    dialog.close());

function error() {
    alert("This is just fancy stuff, not for real clicking. Please no clicky click.")
}

// CHANGE STATUS BUTTON

changeBtn.addEventListener('click', changeReadStatus);

function changeReadStatus() {
    if (readStatus.innerText == "unread") {
        readStatus.innerText = "read";
        readStatus.style.color = "green";
    } else {
        readStatus.innerText = "unread";
        readStatus.style.color = "red";
    }
}


// DELETE BOOK

// deleteBtn.addEventListener('click',deleteBook);

// function deleteBook() {
//     bookContainer.remove();
// }


// GET INPUT

addNewBook.addEventListener('click',getInputValue);

function getInputValue() {
    // document.createElement(bookContainer);
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    // console.log(`${author}, ${title},${pages}`);

    // bookContainer.style.display = "block";

    // document.getElementById("titleOutput").innerText = `Title: ${title}`;
    // document.getElementById("authorOutput").innerText =`Author: ${author}`;
    // document.getElementById("pagesOutput").innerText =`Pages: ${pages}`;

    dialog.close();
}

