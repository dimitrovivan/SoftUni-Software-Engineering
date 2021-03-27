function attachEvents() {
    const baseUrl = 'https://rest-messanger.firebaseio.com/messanger';


    const inputAuthorElement = document.querySelector('#author');
    const inputContentElement = document.querySelector('#content');

    let author = inputAuthorElement.value;
    let content = inputContentElement.value;

    inputAuthorElement.value = '';
    inputContentElement.value = '';

    const sendBtn = document.querySelector('#submit');
    const refreshBtn = document.querySelector('#refresh');
    const textArea = document.querySelector('#messages');

    sendBtn.addEventListener('click', () => {

        let postObj = {author,content};
          
        fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({author,content}),
        })
    })


    refreshBtn.addEventListener('click', () => {

        
          
        let httpRequest = new XMLHttpRequest();

        httpRequest.addEventListener('loadend', function () {
             
            let allMessages = JSON.parse(this.responseText);

            textArea.value = allMessages.map(msg => `${msg.author}: ${msg.content}\n`).join('');
             
        })

        httpRequest.open('GET', baseUrl);
        httpRequest.send();
    })
}

attachEvents();