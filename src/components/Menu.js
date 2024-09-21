import { Container, ListGroup, ListGroupItem } from "reactstrap";
import './style.css';

const Menu = () => {
  return (

    <Container className="header">

      <nav className="navbar">

        <a href="/">Home</a>
        <a href="/view-books">View Books</a>
        <a href="/add-books">Add Book</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="searchBar">
        <input id="searchInput" type="text" placeholder="Search Book..." />
      </div>
    </Container>

  );
}
export default Menu;