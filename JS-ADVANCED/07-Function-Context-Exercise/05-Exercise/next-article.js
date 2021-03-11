function getArticleGenerator(articles) {

    let contentDiv = document.querySelector('#content');

    function showNext() {

        if (articles.length > 0) {

        let articleElement = document.createElement('article');
        articleElement.innerText = articles.shift();
        contentDiv.appendChild(articleElement);
        }
    }

    return showNext;
  
}
