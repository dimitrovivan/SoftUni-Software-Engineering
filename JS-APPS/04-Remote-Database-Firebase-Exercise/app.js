const getDomElement = {
    'loadBooksBtn': () => document.querySelector('#loadBooks'),
    'displayBooksTableHead': () => document.querySelector('.displayBooksTable thead'),
    'displayBooksTableBody': () => document.querySelector('.displayBooksTable tbody'),
    'resultDiv': () => document.querySelector('.resultDiv'),
    'submitBookBtn': () => document.querySelector('.submit'),
    'inputTitle': () => document.querySelector('#title'),
    'inputAuthor': () => document.querySelector('#author'),
    'inputIsbn': () => document.querySelector('#isbn')
};

const baseURL = `https://books-7af21-default-rtdb.firebaseio.com/books`;

getDomElement['loadBooksBtn']().addEventListener('click', loadBooksOnClick);
getDomElement['submitBookBtn']().addEventListener('click', addBookOnClick);


function addBookOnClick(e) {

    e.preventDefault();

    let title = getDomElement['inputTitle']().value;
    let author = getDomElement['inputAuthor']().value;
    let isbn = getDomElement['inputIsbn']().value;

    getDomElement['inputTitle']().value = '';
    getDomElement['inputAuthor']().value = '';
    getDomElement['inputIsbn']().value = '';

    const addBookURL = `${baseURL}.json`;

    const requestBodyObj = {
        method: "POST",
        body: JSON.stringify({
            author,
            title,
            isbn
        })
    }

    fetch(addBookURL,requestBodyObj)
    .then(() => {
        loadBooksOnClick(e);
        displaySuccess('Successfuly added book!')
    })
    .catch(displayError);
}

function loadBooksOnClick(e) {

    e.preventDefault();

    const loadBooksURL = `${baseURL}.json`;

    fetch(loadBooksURL)
    .then(response => response.json())
    .then(data => {

        if(!data) {
            displayError({message: 'No books to display'});
            return;
        }


        const tableBodyElement = getDomElement['displayBooksTableBody']();
        tableBodyElement.innerHTML = '';


        Object.keys(data).forEach(key => {
            
            let {author, title, isbn} = data[key];

            let authorNameTd = createDomElement('td', author);
            let titleNameTd = createDomElement('td', title);
            let isbnTd = createDomElement('td', isbn);

            let editBtn = createDomElement('button', 'Edit', {'class': 'editBtn', 'data-key': key});
            let deleteBtn = createDomElement('button', 'Delete', {'class': 'deleteBtn', 'data-key': key});

            deleteBtn.addEventListener('click', deleteBookOnClick);

            let buttonWrapperTd = createDomElement('td' , '', {}, editBtn, deleteBtn);

            let trElement = createDomElement('tr', '', {}, authorNameTd, titleNameTd, isbnTd, buttonWrapperTd);

            tableBodyElement.appendChild(trElement);
 

        })
    })
    .catch(err => {
        console.log('in catch');
        displayError(err);
    });

}

function deleteBookOnClick(e) {
    
    e.preventDefault();

    let key = this.dataset.key;

    const deleteBookURL = `${baseURL}/${key}.json`;

    const requestBodyObj = {
        method: "DELETE"
    }

    fetch(deleteBookURL, requestBodyObj)
     .then(() => {         
         loadBooksOnClick(e);
         displaySuccess('Successfuly Deleted!');

     });
}

function displaySuccess(msg) {

    let resultDiv = getDomElement['resultDiv']();

    resultDiv.textContent = msg;

    resultDiv.classList.add('success');


    setTimeout(() => {

        resultDiv.classList.remove('success');

    }, 2000)

}

function displayError(err) {

    let resultDiv = getDomElement['resultDiv']();

    let errorMessage = err.message;

    resultDiv.textContent = errorMessage;

    resultDiv.classList.add('error');

    setTimeout(() => {

        resultDiv.classList.remove('error');

    }, 2000)

}

function createDomElement(type, content = '', attribute = {}, ...children) {
        
     let element = document.createElement(type);
     element.textContent = content;

     let isEmptyAttribute = Object.keys(attribute).length < 0;
     let isEmptyChildren = children.length < 0;

     if(!isEmptyAttribute) {

         Object.keys(attribute).forEach(key => {
             element.setAttribute(key, attribute[key]);
         })
     }

     if(!isEmptyChildren) element.append(...children);

     return element;
}