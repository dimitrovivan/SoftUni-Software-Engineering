function growingWord() {
     
  let headingElement = document.querySelector('.conditions > h1');

  let size = parseInt(headingElement.style.fontSize);

  headingElement.style.fontSize = headingElement.style.fontSize ? `${size*2}px` : '2px';

  let colorsParent = document.querySelector('#colors');

  let currentColorElement = colorsParent.firstElementChild;


  let color = currentColorElement.innerHTML;

  headingElement.style.color = color;

  colorsParent.appendChild(currentColorElement);


  
}