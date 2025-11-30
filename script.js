const addBookDialog = document.getElementById("addBook");
const dialog = document.getElementById("mainDialog");
const cancelDialog = document.getElementById("cancel");
const addNewBook = document.getElementById("submit");
const bookWrapper = document.getElementById("bookWrapper");

var myLibrary = [];

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
function Book(title,author,pages,read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
// const book = new Book("Duck","Donaldo","156");
// console.log(book);

// GET INPUT VALUES AND ADD TO LIBRARY
addNewBook.addEventListener('click',() => {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = false;
    if (title == "") {
        alert("Title must be given!")
    } else {
        addBookToLibrary(title,author,pages,read);
        dialog.close();
    }
});


function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    console.log(newBook);
    // addBookToLibrary(newBook);
    myLibrary.push(newBook);
    displayBooks();
    console.log(myLibrary);
}

// EXAMPLE BOOKS
addBookToLibrary('Alice in Wonderland', 'Lewis Carroll', '250',false);
addBookToLibrary('The Alchemist', 'Paulo Coelho', '210',true);
addBookToLibrary('Dune', 'Frank Herbert', '412',false);
addBookToLibrary('Atomic Habits', 'James Clear', '320',true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281',true);


//DISPLAY BOOKS
function displayBooks() {
    bookWrapper.replaceChildren();
    myLibrary.forEach((book) => {
        var bookContainer = document.createElement("div");
        bookContainer.setAttribute("class","bookContainer");
        bookWrapper.appendChild(bookContainer);

        var status = document.createElement("p");
        status.setAttribute("class","status");
        if (book.read == false) {
            status.innerText = `unread`;
            status.style.color = "red"
        } else {
            status.innerText = "read";
            status.style.color = "green";
        }
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

        const changeBtn = document.createElement("button");
        changeBtn.setAttribute("class","change");
        changeBtn.innerText = "Change Status";
        bookContBtn.appendChild(changeBtn);
        changeBtn.addEventListener('click',() => {
            book.toggleRead();
            displayBooks();
        });


        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class","delete");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener('click',() => 
            removeBook(book.id));
        bookContBtn.appendChild(deleteBtn);
    })
}
displayBooks();




// REMOVE BOOKS
function removeBook(bookId){
    myLibrary = myLibrary.filter(book => book.id !== bookId);
    displayBooks();
}

//TOGGLE READ
Book.prototype.toggleRead = function() {
    this.read = !this.read;
};