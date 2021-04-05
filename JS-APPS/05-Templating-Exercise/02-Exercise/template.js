const getDomElement = {

    allCats: () => document.querySelector('#allCats')
}

const getTemplate = (templateName) => fetch(`${templateName}.hbs`).then(r => r.text());

const attachEventListener = () =>  getDomElement.allCats().addEventListener('click', toggleDisplayBtnOnClick);


(() => {

  Promise.all([
      getTemplate('template'),
      getTemplate('cat')
  ]).then(([templateSrc, catSrc]) => {

     Handlebars.registerPartial('cat', catSrc);

     const mainTemplate = Handlebars.compile(templateSrc);

     const resultHTML = mainTemplate({cats});

     getDomElement.allCats().innerHTML = resultHTML;

     attachEventListener();
  })

})()


function toggleDisplayBtnOnClick(e) {

    const { target } = e;

    let result = checkIfWantedElementIsClicked(target, 'button', 'showBtn');

    if(!result)  return;

    const statusDivElement = e.target.parentNode.querySelector('div.status');

    if(statusDivElement.style.display === 'none') {

        statusDivElement.style.display = 'block';
        e.target.textContent = 'Hide status code';

    } else {

        statusDivElement.style.display = 'none';
        e.target.textContent = 'Show status code';

    }

}


function checkIfWantedElementIsClicked(target, elTagName, elClassName) {
 
    let targetTagName = target.tagName.toLowerCase();

    let targetClassName = target.className;

    let result = (targetTagName === elTagName.toLowerCase() && targetClassName === elClassName) ? true : false;
    
    return result;
}



