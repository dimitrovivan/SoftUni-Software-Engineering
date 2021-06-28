import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Counter from './components/Counter';

const books = [
  {
     title: 'Harry Potter',
     author: '....',
     description: 'Very interesting book!'
  },
  {
    title: 'Chronicles of Narnia',
    author: '....',
    description: 'Very interesting book too!'
 },
 {
  title: 'I dont know',
  author: '....',
  description: 'I havent read it!'
}

]

function App() {
  return (
    <div className="page-wrapper">
       <Header></Header>
       <BookList books={books}>Hey</BookList>
       <Counter></Counter>
     </div>
  );
}

export default App;
