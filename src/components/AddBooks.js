import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Button, Container, Input, FormGroup, Label, Form } from "reactstrap";
import base_url from "../LibraryAPI/BackendAPI";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();


  const formHandler = (e) => {
    // console.log(books);
    postAddBooks(books);

    e.preventDefault();
  }

  const postAddBooks = (data) => {
    axios.post(`${base_url}/add-books`, data).then(
      (response) => {
        console.log(response.data);
        setBooks(response.data);
        navigate('/view-books')
      }, (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Fragment >
      <h1 className="text-center">Add Book Details</h1>
      <Form className="AddBooks" onSubmit={formHandler}>
        <FormGroup>
          <Label for="bookId">
            Id
          </Label>
          <Input
            id="bookId"
            name="bookId"
            placeholder="Enter Book Id"
            type="text"
            onChange={(e) => {
              setBooks({ ...books, id: e.target.value })
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="bookTitle">
            Book Title
          </Label>
          <Input
            id="bookTitle"
            name="bookTitle"
            placeholder="Enter Book Title"
            type="text"
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
            onChange={(e) => {
              setBooks({ ...books, link: e.target.value })
            }}
          />
        </FormGroup>
        <Container>
          <Button type="submit" color="success">Add Books</Button>
          <Button type="reset" color="warning" style={{ marginLeft: "1rem" }}>Clear</Button>
        </Container>
      </Form>
    </Fragment>

  );

}
export default AddBooks;