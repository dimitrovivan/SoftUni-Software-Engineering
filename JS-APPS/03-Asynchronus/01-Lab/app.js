function loadCommits() {
   
    const baseUrl = 'https://api.github.com/repos';

    const inputNameElement = document.querySelector('#username');
    const inputRepoNameElement = document.querySelector('#repo');
    const ulElement = document.querySelector('#commits')

    fetch(`${baseUrl}/${inputNameElement.value}/${inputRepoNameElement.value}/commits`)
    .then(response => response.json())
    .then(commits => {
        commits.forEach(currentCommit => {
            let liElement = document.createElement('li');
            liElement.textContent = `${currentCommit.commit.author.name}: ${currentCommit.commit.message}`;
            ulElement.appendChild(liElement);
        })
    })
    .catch(err => console.log('Error'));

    inputNameElement.value = '';
    inputRepoNameElement.value = '';
}