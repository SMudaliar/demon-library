import './App.css';
import Home from './components/Home';
import Book from './components/Book';
import AllBooks from './components/AllBooks';
import AddBooks from './components/AddBooks';
import Header from './components/Header';
import { Container, Col, Row } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <div>
      <Header />

      <Menu />
      <Router>


        <Container>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/view-books' Component={AllBooks} />
            <Route path='/add-books' Component={AddBooks} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/update-book/:id' Component={UpdateBook} />
          </Routes>
        </Container>



      </Router>
    </div>
  );
}

export default App;
