const addBookDialog = document.getElementById("addBook");
const dialog = document.getElementById("mainDialog");
const cancelDialog = document.getElementById("cancel");
const addNewBook = document.getElementById("submit");
// const bookContainer = document.getElementById("bookContainer");
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
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    // console.log(`${author}, ${title},${pages}`);

    var bookContainer = document.createElement("div");
    bookWrapper.appendChild(bookContainer);
    bookContainer.style.backgroundColor = "rgba(38, 38, 110, 0.196)";
    bookContainer.style.border = "2px solid rgba(38, 38, 110, 0.513)";
    bookContainer.style.borderRadius = "10px";
    bookContainer.style.padding = "10px";

    var status = document.createElement("p");
    status.innerText = "unread";
    status.style.color = "red";
    status.style.textAlign = "right";
    bookContainer.appendChild(status);

    var infoContainer = document.createElement("div");
    bookContainer.appendChild(infoContainer);

    var titleOutput = document.createElement("p");
    titleOutput.style.marginBottom = "15px";
    titleOutput.innerText = `Title: ${title}`;
    infoContainer.appendChild(titleOutput);

    var authorOutput = document.createElement("p");
    authorOutput.setAttribute("class","bookText");
    authorOutput.innerText = `Author: ${author}`;
    infoContainer.appendChild(authorOutput);

    var pagesOutput = document.createElement("p");

    pagesOutput.innerText = `Pages: ${pages}`;
    infoContainer.appendChild(pagesOutput);


    // bookContainer.style.display = "block";

    // document.getElementById("titleOutput").innerText = `Title: ${title}`;
    // document.getElementById("authorOutput").innerText =`Author: ${author}`;
    // document.getElementById("pagesOutput").innerText =`Pages: ${pages}`;

    dialog.close();
}

