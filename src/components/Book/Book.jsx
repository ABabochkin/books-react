import React from "react";
import styles from "../Book/book.module.scss";
import { Link } from "react-router-dom";

export const Book = (props) => {
  const { book, detailBook } = props;
  return (
    <>
      <Link to="/detail">
        <div
          className={styles.bookCard}
          onClick={() => {
            detailBook(book.id);
          }}
        >
          <img
            className={styles.bookCover}
            src={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail
            }
            alt="book"
          />
          <div className={styles.bookTitle}> {book.volumeInfo.title} </div>
          <div className={styles.bookAuthor}>{book.volumeInfo.authors}</div>
        </div>
      </Link>
    </>
  );
};
