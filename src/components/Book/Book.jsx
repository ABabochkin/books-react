import React from "react";
import styles from "../Book/book.module.scss";

const Book = (props) => {
  const { book = [] } = props;
  return (
    <div className={styles.bookCard}>
      <img
        className={styles.bookCover}
        src="https://gl-img.rg.ru/uploads/images/2016/04/19/a2ed2b7995ca64c.jpg"
        alt="book"
      />
      <div className={styles.bookTitle}>Название книги</div>
      <div className={styles.bookAuthor}>Автор книги</div>
    </div>
  );
};

export default Book;
