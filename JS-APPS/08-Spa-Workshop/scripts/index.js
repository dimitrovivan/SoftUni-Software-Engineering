async function getTemplate(templateName) {
    
    const templatePath = `./templates/${templateName}.hbs`;

    let response = await fetch(templatePath);

    let data = await response.text();

    let template = Handlebars.compile(data);

    return template;
}