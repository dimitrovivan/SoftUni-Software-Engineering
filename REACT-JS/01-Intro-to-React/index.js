const rootElement = document.querySelector('#root');
// const headingElement = React.createElement(
//                   'header', 
//                   {},
//                   React.createElement('h1', {}, 'Hello from react heading 1'),
//                   React.createElement('h2', {}, 'Hello from react heading 2')
//                   );
const headingElement = (
                     <header>
                         <h1>ASdasd</h1>
                     </header>
)
ReactDOM.render(headingElement, rootElement);