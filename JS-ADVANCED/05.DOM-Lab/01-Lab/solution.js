function createArticle() {
	
	let inputTitleElement = document.querySelector('#createTitle');
	let inputContentElement = document.querySelector('#createContent');

	let headingElement = document.createElement('h3');
	 headingElement.innerHTML = `${inputTitleElement.value}`;
	let paragraphElement = document.createElement('p');
	paragraphElement.innerHTML = `${inputContentElement.value}`;

	inputContentElement.value = '';
	inputTitleElement.value = '';
    
	let articleContainerElement = document.querySelector('#articles');

	let article = document.createElement('article');
	article.appendChild(headingElement);
	article.appendChild(paragraphElement);

	articleContainerElement.appendChild(article);
}
