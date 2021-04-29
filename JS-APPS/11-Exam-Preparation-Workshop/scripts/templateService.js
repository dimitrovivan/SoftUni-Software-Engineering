export async function getHtmlResult(templateName) {
 
    let view = await getTemplateView(templateName);

    let template = Handlebars.compile(view);

    return template();
}

export async function getPartialTemplateView(templateName) {

    let response = await fetch(`../templates/partials/${templateName}.hbs`);

    let htmlResult = await response.text();

    return htmlResult;

}

export async function getTemplateView(templateName) {

    let response = await fetch(`../templates/${templateName}.hbs`);

    let htmlResult = await response.text();

    return htmlResult;
}