function loadRepos() {
   
   const url = 'https://api.github.com/users/dimitrovivan/repos';

   const httpRequest = new XMLHttpRequest();

   const divResElement = document.querySelector('#res');
   const ulElement = document.createElement('ul');
   divResElement.appendChild(ulElement);

   httpRequest.addEventListener('loadend', function () {
      console.log(this);

      let allRepos = JSON.parse(this.responseText);
      
      ulElement.innerHTML = allRepos.map(repo => `<li><a target="_blank">${repo.html_url}</a></li>`).join('');
   })

   httpRequest.open('GET', url);
   httpRequest.send();
}