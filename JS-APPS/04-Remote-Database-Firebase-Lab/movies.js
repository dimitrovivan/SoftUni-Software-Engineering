(function movieList() {

    const addMoviesBtn = document.querySelector('.addMovieBtn');
    const displayMoviesBtn = document.querySelector('.displayMovies');

    addMoviesBtn.addEventListener('click', e => {

      const movieNameElement = document.querySelector('#movie-name');
      const movieActorElement = document.querySelector('#movie-actor');
      const movieRatingElement = document.querySelector('#movie-rating');
      const movieImgURLElement = document.querySelector('#movie-img');

      const createMovieURL = 'https://testproject-329ca-default-rtdb.firebaseio.com/movies.json';

      let movieObj = JSON.stringify({
          name: movieNameElement.value,
          actor: movieActorElement.value,
          rating: movieRatingElement.value,
          imgURL: movieImgURLElement.value,
      });

      movieNameElement.value = '';
      movieActorElement.value = '';
      movieRatingElement.value = '';
      movieImgURLElement.value = '';

      fetch(createMovieURL, {
          method: "POST",
          body: movieObj,
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.code + err.message));
    })


    displayMoviesBtn.addEventListener('click', e => {

        console.log('in');
        let url = 'https://testproject-329ca-default-rtdb.firebaseio.com/movies.json';
        fetch(url)
        .then(response => response.json())
        .then(moviesData => {
            console.log(moviesData);
            const ulElement = document.createElement('ul');
            const displayMovieSection = document.querySelector('.all-movies-section');
            Object.keys(moviesData).forEach(key => {

            let {name , actor, rating, imgURL} = moviesData[key];
            ulElement.innerHTML += `<li>Movie Name: ${name}</li><li>Movie Actor: ${actor}</li><li>Movie Rating: ${rating}</li><li>Movie Picture:<img src="${imgURL}"></li><br><br>`;
            console.log(ulElement.innerHTML);
            })

            displayMovieSection.appendChild(ulElement);
        })
        .catch(err => console.log(err.message + 'sorry'));
    })
})()