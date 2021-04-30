import { request } from './util.js';
import { getUserData } from './userService.js'
import { redirect } from './router.js';

const baseURL = 'https://softwiki-355f2-default-rtdb.firebaseio.com';
const articlesURL = `${baseURL}/articles.json`

export async function createArticle() {

    let createArticleForm = document.forms.createArticleForm;

    let title = createArticleForm.querySelector('#title').value;
    let selectionCategory = createArticleForm.querySelector('#category');
    let category = selectionCategory.options[selectionCategory.selectedIndex].text;
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

export async function getArticleById(id) {

    let URL = `${baseURL}/articles/${id}.json`;

    let response = await request.get(URL);
    let data = await response.json();

    return data;
}


export async function deleteOnClick() {

    let articleId = location.pathname.split('/')[2];

    let URL = `${baseURL}/articles/${articleId}.json`;

    let response = await request.del(URL);

    redirect('/');

}