import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Label, Form, FormGroup, Input, Container } from "reactstrap";
import base_url from "../LibraryAPI/BackendAPI";

const UpdateBook = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [books, setBooks] = useState({});

    

    useEffect(() => {


        axios.get(`${base_url}/book/${id}`).then(
            (response) => {
                console.log(response.data);
                setBooks(response.data)
            }, (error) => {
                console.log(error);
            }
        );


    },[id]);

    const formHandler=(e)=>{
        console.log();
        e.preventDefault();

        axios.put(`${base_url}/update-book`, books).then(
            (response) => {
                console.log(response.data);
                setBooks(response.data);
                navigate("/view-books")

            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <Fragment>
            <h1 className="text-center">Update Book Details</h1>
            <Form onSubmit={formHandler}>

                <FormGroup>
                    <Label for="bookTitle">
                        Book Title
                    </Label>
                    <Input
                        id="bookTitle"
                        name="bookTitle"
                        placeholder="Enter Book Title"
                        type="text"
                        value={books.title}
                        onChange={(e) => {
                            setBooks({ ...books, title: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="bookDescription">
                        Book Description
                    </Label>
                    <Input
                        id="bookDescription"
                        name="bookDescription"
                        placeholder="Enter Book Description"
                        type="text"
                        value={books.body}
                        onChange={(e) => {
                            setBooks({ ...books, body: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="bookAuthor">
                        Book Author
                    </Label>
                    <Input
                        id="bookAuthor"
                        name="bookAuthor"
                        placeholder="Enter Book Author"
                        type="text"
                        value={books.author}
                        onChange={(e) => {
                            setBooks({ ...books, author: e.target.value })
                        }}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="bookGenre">
                        Book Genre
                    </Label>
                    <Input
                        id="bookGenre"
                        name="bookGenre"
                        placeholder="Enter Book Genre"
                        type="text"
                        value={books.genre}
                        onChange={(e) => {
                            setBooks({ ...books, genre: e.target.value })
                        }}
                        
                        />
                </FormGroup>
                <FormGroup>
          <Label for="bookImg">
            Book Image Link
          </Label>
          <Input
            id="bookImg"
            name="bookImg"
            placeholder="Enter Image Link"
            type="text"
            value={books.link}
            onChange={(e) => {
                setBooks({ ...books, link: e.target.value })
            }}
            
          />
        </FormGroup>
                <Container>
                    <Button type="submit" color="success">Update Books</Button>
                    <Button type="clear" color="warning" style={{ marginLeft: "1rem" }} onClick={() => navigate('/view-books')}>Back</Button>
                </Container>
            </Form>
        </Fragment>
    );
}
export default UpdateBook;