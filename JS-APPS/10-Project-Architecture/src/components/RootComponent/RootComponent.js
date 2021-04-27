import './RootComponent.css';


class RootComponent extends HTMLElement {

    constructor() {
       super();
       this.skills = ['fast learner', 'teamplayer', 'creative person', 'communicative'];

    }

    template = (skills) => `
    <div class = "root-component-template">
        <h3>List of skills</h3>
        <ul>
        ${skills.map(skill =>'<skill-card name="' +skill+ '"></skill-card>').join('')}
        </ul>
        </div>
        `;

    connectedCallback() {

        document.querySelector('button').addEventListener('click', e => {
            console.log(this);
        this.innerHTML = this.template(this.skills);
               
        })

    }

}

export default RootComponent;