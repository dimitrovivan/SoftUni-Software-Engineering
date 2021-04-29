import { getHtmlResult } from './templateService.js';

const rootElement = document.querySelector('#root');

const routes = [
    {
        path: '/',
        execute: async () => getHtmlResult('home')
    },
    {
        path: '/login',
        execute: async () => getHtmlResult('login')
    },
    {
        path: '/register',
        execute: async () => getHtmlResult('register')
    },
    {
        path: '/create',
        execute: async () => getHtmlResult('create')
    },
    {
        path: '/logout',
        execute: async () =>  getHtmlResult('home')
    },
]

export async function router(pathName) {

    let route = checkForValidPath(pathName);

    if (!route) return navigate('/');

    let htmlResult = await route.execute();

    rootElement.innerHTML = htmlResult;

}

export function navigate(pathName) {

    history.pushState({}, '', pathName);

    let customPopStateEvent = new CustomEvent('popstate');

    window.dispatchEvent(customPopStateEvent);

}

window.addEventListener('popstate', () => {

    router(location.pathname);

})

export function redirect(pathName) {

    navigate(pathName);

}

export function checkForValidPath(pathName) {

    return routes.find( ({path}) => path === pathName);

}