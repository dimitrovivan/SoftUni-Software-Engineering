import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
