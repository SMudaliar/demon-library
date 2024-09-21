import { useEffect, useState } from "react";
import Book from "./Book";
import axios from "axios";
import base_url from "../LibraryAPI/BackendAPI";
import '../components/style.css';

const AllBooks=()=>{

    const getAllBooks=()=>{
        axios.get(`${base_url}/view-books`).then(
            (response) => {
                console.log(response.data);
                setBooks(response.data)
            },(error)=>{
                console.log(error);
            }
        );
    };

    useEffect(()=>{
        getAllBooks();
    },[])



    const [books, setBooks] = useState(
        [
            // {title : "Focus on What Matters ", description : "A practical guide to achieving greater productivity"},
            // {title : "Ikigai", description : "The Japanese Secret To A Long Life"},
            // {title : "When I'm with You", description : "You can plan everything, but you can't plan with whom and when you'll fall in love, isn't it?"}
        ]
        
    );

    return(
     <div className="scroll">
        {
     books.length>0?
     books.map((elements)=><Book book ={elements} refreshBooks={getAllBooks}/>):
     "No Books Found"
        }

    </div>

    );
    
}
export default AllBooks;