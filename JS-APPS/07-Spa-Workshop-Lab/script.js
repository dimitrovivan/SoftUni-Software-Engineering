const getDomElement = {
    root: () => document.querySelector('.root'),
    homeTemplate: () => document.querySelector('.home-template'),
    registerTemplate: () => document.querySelector('.register-template'),
    loginTemplate: () => document.querySelector('.login-template'),
    navigationTemplate: () => document.querySelector('.navigation-template'),
    footerTemplate: () => document.querySelector('.footer-template'),
    addMovieTemplate: () => document.querySelector('.add-movie-template'),
    showUserMoviesTemplate: () => document.querySelector('.show-userMovies-template'),
    notificationsTemplate: () => document.querySelector('.notifications-template'),
    errorNotificationSection: () => document.querySelector('.notifications.error'),
    successNotificationSection: () => document.querySelector('.notifications.success'),
    errorNotificationMessageBox: () => document.querySelector('#errorBox'),
    successNotificationMessageBox: () => document.querySelector('#successBox'),
    addMovieForm: () => document.querySelector('#add-movie-form'),
    showMovieFormBtn: () => document.querySelector('.show-movie-form'),

}


function displayNotification(type, message) {

    let notificationType = type.toLowerCase();

    let domElementSection;
    let domElementMessageBox;
    
    switch(notificationType) {

        case 'error': 
        domElementSection = getDomElement["errorNotificationSection"]();
        domElementMessageBox = getDomElement["errorNotificationMessageBox"]();
        break;

        default:
        domElementSection = getDomElement["successNotificationSection"]();
        domElementMessageBox = getDomElement["successNotificationMessageBox"]();
        break;

    }

    domElementSection.style.display = "block";
    domElementMessageBox.innerHTML = message;

    setTimeout( () => {
        domElementSection.style.display = "none";
    }, 1500)
}


//Router map returns html Template element depending on passed path
const routerMap = {
    '/home': getDomElement["homeTemplate"](),
    '/register': getDomElement["registerTemplate"](),
    '/login': getDomElement["loginTemplate"](),
    '/logout': getDomElement["homeTemplate"]()
}

function checkIfExistPathLocation(path) {

    let allPaths = Object.keys(routerMap);

    let isFound = allPaths.find(x => x === path);

    return isFound;
}

window.addEventListener('popstate', () => {
    navigate(location.pathname);
})

async function router(path) {

    if (!checkIfExistPathLocation(path)) return;

    let templateView = routerMap[path].innerHTML;

    let templateFunc = Handlebars.compile(templateView);

    let htmlResult;

    switch(path) {

        case '/home':
        let movies = [];
        let emailName = "";

        let isLogged = localStorage.getItem("email") ? true : false;

        if(isLogged) {
            emailName = localStorage.getItem("email").split("@")[0];
            
            movies = await getAllMoviesOnSpecificUser(emailName);
        }

        htmlResult = templateFunc({emailName, isLogged, movies});
        break;

        case '/login':
        htmlResult = templateFunc();
        break;

        case '/register': htmlResult = templateFunc();
        break;

        case '/logout': 
        localStorage.removeItem('email');
        return navigate('/home');

    }
    
    getDomElement["root"]().innerHTML = htmlResult;

}

function navigate(path) {

    history.pushState({}, "", path);

    router(path);

}


getDomElement["root"]().addEventListener("click", navigateOnClick);


function navigateOnClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains("nav-link")) return;

    const newUrl = new URL(e.target.href);

    navigate(newUrl.pathname);

}

async function register() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;

    let registerForm = new FormData(document.forms['register-form']);

    let email = registerForm.get("email");
    let password = registerForm.get("password");
    let confPassword = registerForm.get("repeatPassword");

    if(!password || !email || !confPassword) {displayNotification("error", "You must fill all fields"); return}

    if(password !== confPassword) {displayNotification("error", "Password missmatch"); return}

    if(password.length < 6) {displayNotification("error", "Password must be at least 6 characthers long"); return}

    const bodyObj = JSON.stringify({ email, password })

    try {
    let response = await fetch(url, {
        method: "POST",
        body: bodyObj
    });
    
    navigate('/login');
    displayNotification("success", "Successfuly registrated");

    } catch(e) {
        displayNotification("error", e.message);
        return;
    }

}

async function login() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

    let loginForm = new FormData(document.forms['login-form']);

    let email = loginForm.get("email");
    let password = loginForm.get("password");

    if(!password || !email) {displayNotification("error", "You must fill all fields"); return}

    const bodyObj = JSON.stringify({ email, password })

    try {
    let response = await fetch(url, {
        method: "POST",
        body: bodyObj
    });

    let data = await response.json();

    localStorage.setItem("email", email);

     navigate('/home');

     setTimeout( () => displayNotification("success", "Successfuly logged in"), 500);
     

    } catch(e) {
        displayNotification("error", e.message);
        return;
    }

    
}

function showAddMovieForm() {

    const addMovieForm = getDomElement["addMovieForm"]();
    const showMovieFormBtn = getDomElement["showMovieFormBtn"]();

    if(addMovieForm.style.display == "block") {
        addMovieForm.style.display = "none";
        showMovieFormBtn.innerText = "Add Movie";
    } else {
        addMovieForm.style.display = "block";
        showMovieFormBtn.innerText = "Hide Form";

    }

}

async function addMovieOnSubmit() {

    const addMovieForm = new FormData(document.forms['add-movie-form']);

    const allMoviesUrl = 'https://movies-ca7c6-default-rtdb.firebaseio.com/movies.json';

    let title = addMovieForm.get('title');
    let description = addMovieForm.get('description');
    let imageUrl = addMovieForm.get('imageUrl');

    if(!title || !description || !imageUrl) {displayNotification("error", "You must fill all fields"); return}

    let creator = localStorage.getItem('email');

    let bodyObj = JSON.stringify({
        title,
        description,
        imageUrl,
        creator,
        likes: 0
    })

    try {

    let response = await fetch(allMoviesUrl, {
        method: "POST",
        body: bodyObj
    })

      navigate('/home');
      displayNotification("success", "Successfuly added new movie");

  }catch(error) {
      displayNotification("error", error.message);
      return;
  }
}

async function getAllMoviesOnSpecificUser(user) {

    let allUserMovies = [];

    let response = await fetch('https://movies-ca7c6-default-rtdb.firebaseio.com/movies.json');
    
    let movies = await response.json();

    Object.keys(movies).forEach(key => {

        if(user === movies[key].creator) {

        let {title, imageUrl, description} = movies[key];

        let currMovie = {title, imageUrl, description};

        allUserMovies.push(currMovie);
    }
    })

    return allUserMovies;
    
}


