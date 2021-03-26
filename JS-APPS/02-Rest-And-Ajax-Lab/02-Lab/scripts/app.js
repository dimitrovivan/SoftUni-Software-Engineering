function loadRepos() {
	
	const ulElement = document.querySelector('#repos');
	ulElement.innerHTML = '';

	const httpRequest = new XMLHttpRequest();

	const inputName = document.querySelector('#username');

	const name = inputName.value;
    inputName.value = '';

	if(!name) throw new Error('You must insert name !');

	const url = `https://api.github.com/users/${name}1/repos`;

	httpRequest.addEventListener('loadend', function () {

		if(this.status == 404) {
		    
			ulElement.innerHTML = 'No such a user';
			return;
		}

		let allRepos = JSON.parse(this.responseText);

		ulElement.innerHTML = allRepos.map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).join('');
	})


	httpRequest.open('GET', url);
	httpRequest.send();
}