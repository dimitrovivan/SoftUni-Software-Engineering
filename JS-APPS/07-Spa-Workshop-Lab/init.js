( () => {
        
    let footerTemplateView = getDomElement["footerTemplate"]().innerHTML;
    let navigationTemplateView = getDomElement["navigationTemplate"]().innerHTML;
    let addMovieTemplateView = getDomElement["addMovieTemplate"]().innerHTML;
    let showUserMoviesTemplateView = getDomElement["showUserMoviesTemplate"]().innerHTML;
    let notificationsTemplateView = getDomElement["notificationsTemplate"]().innerHTML;

    Handlebars.registerPartial("footer", footerTemplateView);
    Handlebars.registerPartial("navigation", navigationTemplateView);
    Handlebars.registerPartial("addMovie", addMovieTemplateView);
    Handlebars.registerPartial("showMovies", showUserMoviesTemplateView);
    Handlebars.registerPartial("notifications", notificationsTemplateView);

    if(!checkIfExistPathLocation(location.pathname)) {
        navigate('/home');
        return;
    } else {
        navigate(location.pathname);
    }

 })();
