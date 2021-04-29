import { request } from './util.js';
import { getUserData } from './userService.js'
import { redirect } from './router.js';

const baseURL = 'https://softwiki-355f2-default-rtdb.firebaseio.com';
const articlesURL = `${baseURL}/articles.json`

export async function createArticle() {

    let createArticleForm = document.forms.createArticleForm;

    let title = createArticleForm.querySelector('#title').value;
    let category = createArticleForm.querySelector('#category').value;
    let content = createArticleForm.querySelector('#content').value;

    if(!title || !category || !content) return;

    let body = {title, category, content, creator: getUserData()}
 
    let response = await request.post(articlesURL, body);

    redirect('/');

}

export async function getAllArticles() {

    let response = await request.get(articlesURL);
    let data = await response.json();
    
    return data;
}