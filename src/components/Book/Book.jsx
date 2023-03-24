import axios from "axios";
import React from "react";
import styles from "../Book/book.module.scss";

import { Link } from "react-router-dom";

const Book = (props) => {
  const { book, setBookiId, setLoading, thumbnail, authors } = props;

  const checkBook = async (id) => {
    try {
      setLoading(true);
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBookiId(response.data.volumeInfo);
      setLoading(false);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  return (
    <>
      <Link to="/book">
        <div
          className={styles.bookCard}
          onClick={() => {
            checkBook(book.id);
          }}
          key={book.id}
        >
          <img className={styles.bookCover} src={thumbnail} alt="book" />
          <div className={styles.bookTitle}> {book.volumeInfo.title} </div>
          <div className={styles.bookAuthor}>{authors}</div>
        </div>
      </Link>
    </>
  );
};

export default Book;
