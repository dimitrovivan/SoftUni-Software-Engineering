
class SkillCard extends HTMLElement {

   connectedCallback() {

    this.innerHTML = `
       <li>${this.getAttribute('name')}</li>    
    `
    console.log(1);
   }

}

export default SkillCard;