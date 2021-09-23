import { createElement } from 'react';

const rootElement = document.getElementById('root');

const headingElement = createElement('h1', {}, 'Hello from REACT!');
console.log(headingElement);