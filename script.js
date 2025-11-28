const addBookDialog = document.getElementById("addBook");
const dialog = document.getElementById("mainDialog");
const cancelDialog = document.getElementById("cancel");
const addNewBook = document.getElementById("submit");
const bookWrapper = document.getElementById("bookWrapper");
// const bookContainer = document.getElementById("bookContainer");
// const changeBtn = document.getElementById("changeBtn");
// const deleteBtn = document.getElementById("deleteBtn");
// const readStatus = document.getElementById("status");
const myLibrary = [];

// ERROR MESSAGE
function error() {
    alert("This is just fancy stuff, not for real clicking. Please no clicky click.")
}

// DIALOG BUTTONS
addBookDialog.addEventListener('click',() => {
    newBookForm.reset();
    dialog.showModal();
})


cancelDialog.addEventListener('click',() =>
    dialog.close());


// BOOK CONSTRUCTOR
function Book(author,title,pages) {
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = "unread";
}


// const book = new Book("Duck","Donaldo","156");
// console.log(book);

// ADD BOOKS
addNewBook.addEventListener('click',() => {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const newBook = new Book(author,title,pages);
    console.log(newBook);
    addBooktoLibrary(newBook);
    displayBooks();
    dialog.close();
});


function addBooktoLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayBooks() {
    bookWrapper.replaceChildren();
    myLibrary.forEach(book => {
        var bookContainer = document.createElement("div");
        bookContainer.setAttribute("class","bookContainer");
        bookWrapper.appendChild(bookContainer);

        var status = document.createElement("p");
        status.setAttribute("class","status");
        status.innerText = `unread`;
        bookContainer.appendChild(status);

        var infoContainer = document.createElement("div");
        bookContainer.appendChild(infoContainer);

        var titleOutput = document.createElement("p");
        titleOutput.setAttribute("class","bookText");
        titleOutput.innerText = `Title: ${book.title}`;
        infoContainer.appendChild(titleOutput);

        var authorOutput = document.createElement("p");
        authorOutput.setAttribute("class","bookText");
        authorOutput.innerText = `Author: ${book.author}`;
        infoContainer.appendChild(authorOutput);

        var pagesOutput = document.createElement("p");
        pagesOutput.setAttribute("class","bookText");
        pagesOutput.innerText = `Pages: ${book.pages}`;
        infoContainer.appendChild(pagesOutput);

        var bookContBtn = document.createElement("div");
        bookContBtn.setAttribute("class","bookContBtn");
        bookContainer.appendChild(bookContBtn);

        var changeBtn = document.createElement("button");
        changeBtn.setAttribute("class","change");
        changeBtn.innerText = "Change Status";
        bookContBtn.appendChild(changeBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class","delete");
        deleteBtn.innerText = "Delete";
        bookContBtn.appendChild(deleteBtn);
    })
}

displayBooks();


// // CHANGE STATUS BUTTON
// changeBtn.addEventListener('click', changeReadStatus);

// function changeReadStatus() {
//     if (readStatus.innerText == "unread") {
//         readStatus.innerText = "read";
//         readStatus.style.color = "green";
//     } else {
//         readStatus.innerText = "unread";
//         readStatus.style.color = "red";
//     }
// }


// // DELETE BOOK

// deleteBtn.addEventListener('click',deleteBook);

// function deleteBook() {
//     bookContainer.remove();
// }


// GET INPUT

// addNewBook.addEventListener('click',getInputValue);

// function getInputValue() {
//     var author = document.getElementById("author").value;
//     var title = document.getElementById("title").value;
//     var pages = document.getElementById("pages").value;
//     // console.log(`${author}, ${title},${pages}`);

//     var bookContainer = document.createElement("div");
//     bookContainer.setAttribute("class","bookContainer");
//     bookWrapper.appendChild(bookContainer);

//     var status = document.createElement("p");
//     status.setAttribute("class","status");
//     status.innerText = `unread`;
//     bookContainer.appendChild(status);

//     var infoContainer = document.createElement("div");
//     bookContainer.appendChild(infoContainer);

//     var titleOutput = document.createElement("p");
//     titleOutput.setAttribute("class","bookText");
//     titleOutput.innerText = `Title: ${title}`;
//     infoContainer.appendChild(titleOutput);

//     var authorOutput = document.createElement("p");
//     authorOutput.setAttribute("class","bookText");
//     authorOutput.innerText = `Author: ${author}`;
//     infoContainer.appendChild(authorOutput);

//     var pagesOutput = document.createElement("p");
//     pagesOutput.setAttribute("class","bookText");
//     pagesOutput.innerText = `Pages: ${pages}`;
//     infoContainer.appendChild(pagesOutput);

//     var bookContBtn = document.createElement("div");
//     bookContBtn.setAttribute("class","bookContBtn");
//     bookContainer.appendChild(bookContBtn);

//     var changeBtn = document.createElement("button");
//     changeBtn.setAttribute("class","change");
//     changeBtn.innerText = "Change Status";
//     bookContBtn.appendChild(changeBtn);

//     var deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class","delete");
//     deleteBtn.innerText = "Delete";
//     bookContBtn.appendChild(deleteBtn);

//     // bookContainer.style.display = "block";

//     // document.getElementById("titleOutput").innerText = `Title: ${title}`;
//     // document.getElementById("authorOutput").innerText =`Author: ${author}`;
//     // document.getElementById("pagesOutput").innerText =`Pages: ${pages}`;

//     dialog.close();
// }

