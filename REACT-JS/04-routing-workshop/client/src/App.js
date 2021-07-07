import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
