
export async function getHtmlResult(templateName, context = null) {

 
    let view = await getTemplateView(templateName);

    let template = Handlebars.compile(view);

    if(context) {
        
        return template(context);
    }

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