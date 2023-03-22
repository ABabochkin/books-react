import React from "react";
import styles from "../Book/book.module.scss";

const Book = (props) => {
  const { book } = props;
  return (
    <div className={styles.bookCard}>
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
  );
};

export default Book;
