import axios from "axios";
import { Link } from "react-router-dom";
import { Container, CardBody, CardText, Card, CardTitle, Button, CardImg } from "reactstrap";
import base_url from "../LibraryAPI/BackendAPI";

const Book = ({ book, refreshBooks }) => {

    const deleteBook = (id) => {
        axios.delete(`${base_url}/delete-book/${id}`).then(
            (response) => {
                console.log(response.data);
                refreshBooks();
            }, (error) => {
                console.log(error);
            }
        );
    }

    return (
        <Card className="text-center m-1" >
            <Container style={{ display: "flex", marginBottom: 15}}>

                <CardImg alt={book.title} src={book.link} style={{
                    marginTop: 20,
                    height:'auto',
                    width: 150,
                    marginBottom: 20
                }} />

                <CardBody>
                    <CardTitle className="fw-bold">{book.id}{') '}{book.title}</CardTitle>
                    <CardText>{'Description: '}{book.body}</CardText>
                    <CardText>{'By: '}{book.author}</CardText>

                    <Container>
                        <Link to={`/update-book/${book.id}`}>
                            <Button color="success">Update</Button>
                        </Link>
                        <Button color="danger" style={{ marginLeft: "1rem" }} onClick={() => deleteBook(book.id)}>Delete</Button>
                    </Container>
                </CardBody>

            </Container>
        </Card>
    );
}
export default Book;