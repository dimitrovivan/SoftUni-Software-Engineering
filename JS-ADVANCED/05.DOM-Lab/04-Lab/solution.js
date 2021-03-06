function solve() {

  let allLinks = Array.from(document.getElementsByClassName('link-1'));

  allLinks.forEach( link => {
    link.addEventListener('click', () => {

      let pElement = link.lastElementChild;

      console.log(pElement);
       
      let currentText = pElement.innerHTML.split(' ');

      let counter = Number(currentText[1]);

      pElement.innerText = `visited ${counter+=1} times`;
      console.log(pElement.innerHTML);
    })
  })
}