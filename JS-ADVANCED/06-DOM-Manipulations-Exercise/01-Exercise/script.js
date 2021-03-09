function create(words) {

   let contentElement = document.querySelector('#content');
   
   words.forEach(word => {
       
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.innerHTML = word;

      divElement.appendChild(pElement);

      divElement.addEventListener('click', (e) => {
        let currentP =  e.currentTarget.querySelector('p');
        currentP.style.display = 'block';
      })

      contentElement.appendChild(divElement);
   })

}