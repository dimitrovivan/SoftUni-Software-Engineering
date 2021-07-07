import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Header />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
