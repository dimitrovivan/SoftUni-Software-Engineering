function attachEvents() {

    let loadBtn = document.querySelector('#btnLoadPosts');
    let selectPostsElement = document.querySelector('#posts');
    const fireBaseUrl = 'https://blog-apps-c12bf.firebaseio.com/.json'
    loadBtn.addEventListener('click', () => {
       
        fetch(fireBaseUrl)
        .then(response => response.json())
        .then(data => {
            Object.entries(data.posts).forEach(([key,value]) => {
                let newOptionElement = document.createElement('option');
                newOptionElement.setAttribute('value', key);
                newOptionElement.textContent = value.title;
                selectPostsElement.appendChild(newOptionElement);
            })
        })
        .catch(err => console.log('Error'))
    })
}

attachEvents();