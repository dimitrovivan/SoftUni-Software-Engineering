import { redirect } from './router.js';

const firebaseApiKey = "AIzaSyD6suWfrwshBeeidEnbvGXKd23YQnuLvqU";
const registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseApiKey}`;
const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`;

export async function register() {

    let registerForm = document.forms.registerForm;

    let email = registerForm.querySelector('#email').value;
    let password = registerForm.querySelector('#password').value;
    let repPassword = registerForm.querySelector('#repPassword').value;

    if(!email || !password || !repPassword) return;

    if(password !== repPassword) return;

    let body = { email, password }

    await request.post(registerURL, body);

    redirect('/login');
}

export async function login() {
   
    let loginForm = document.forms.loginForm;

    let email = loginForm.querySelector('#email').value;
    let password = loginForm.querySelector('#password').value;

    if(!email || !password) return;

    let body = { email, password }

    let response = await request.post(loginURL, body);

    let data = await response.json();

    localStorage.setItem("userToken", data.localId);
    
    redirect('/');
}

const request = {

    get: (url) => fetch(url, {
        method: "GET",
        returnSecureToken: true
    }),
       
    post: (url, body = {}) => fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        returnSecureToken: true
    })
}