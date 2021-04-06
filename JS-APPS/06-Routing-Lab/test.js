
const contentDiv = document.querySelector('.content');

const router = {

    '/home': `<h1>ASd</h1>`,
    '/about': 'About page',
    '/contact': 'Contact page'
}


window.addEventListener('popstate', e => {
          
    console.log(history);
    contentDiv.innerHTML = router[location.pathname] || '<p>Not Found!</p>';
})

function registerState(url) {

    history.pushState({}, '', url)

    let event = new CustomEvent('popstate', {
        state: {},
        title: '',
        url
    });

    window.dispatchEvent(event);
    contentDiv.innerHTML = router[location.pathname] || '<p>Not Found!</p>';


}