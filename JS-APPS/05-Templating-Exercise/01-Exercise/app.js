const getDomElement = {

    inputTowns: () => document.querySelector('input#towns'),
    root: () => document.querySelector('div#root'),
    loadBtn: () => document.querySelector('button#btnLoadTowns')

}

getDomElement.loadBtn().addEventListener('click', loadTownsOnClick);

function loadTownsOnClick(e) {
    
    e.preventDefault();

    const { value } = getDomElement.inputTowns();

    const towns = value.split(', ').map(town => {return {name: town}});


    getTemplate().then(data => {

     const template = Handlebars.compile(data);

     const htmlResult = template({towns});

     getDomElement.root().innerHTML = htmlResult;

    })
    .catch(err => console.log('in 2 catch'))
}

getTemplate = () => fetch('template.hbs').then(r => r.text());