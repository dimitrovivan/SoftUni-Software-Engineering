function solve() {
  
  let paragraphInputElement = document.querySelector('#input');

  let sentences = paragraphInputElement.innerHTML.split('.').filter(sentence => sentence != '');

  let parentElement = document.querySelector('#output');

   for (let index = 0; index < sentences.length; index+=3) {
        
    let paragraphElement = document.createElement('p');

    let allText = [sentences[index], sentences[index+1], sentences[index+2]].filter(sentence => sentence);

    let text = allText.join('.');

    paragraphElement.innerHTML = text + '.';

    parentElement.appendChild(paragraphElement);
   }
 }
