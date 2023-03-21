import React, { useState, useEffect } from "react";
import axios from "axios";

import Book from "../components/Book/Book";

const Main = () => {
  const [books, setBooks] = useState([]);
  const URL = "AIzaSyBunYTFXCRD5SFZKVRNZvq883PudUc7C1c";

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=java&key=${URL}`)
      .then((res) => setBooks(res.data.items))
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};

export default Main;
