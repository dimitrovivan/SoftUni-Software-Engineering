(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.skills=["fast learner","teamplayer","creative person"]}template=e=>`\n        <h3>List of skills</h3>\n        <ul>\n        ${e.map((e=>'<skill-card name="'+e+'"></skill-card>')).join("")}\n        </ul>\n        `;connectedCallback(){document.querySelector("button").addEventListener("click",(e=>{console.log(this),this.innerHTML=this.template(this.skills)}))}}const t=e;class n extends HTMLElement{connectedCallback(){this.innerHTML=`\n       <li>${this.getAttribute("name")}</li>    \n    `,console.log(1)}}const s=n;customElements.define("root-component",t),customElements.define("skill-card",s),document.querySelector(".root").innerHTML="<root-component></root-component>"})();