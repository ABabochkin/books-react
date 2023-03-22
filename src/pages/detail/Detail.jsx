import React from "react";
import styles from "../detail/detail.module.scss";

const Detail = (props) => {
  const { bookId } = props;

  return (
    <div className={styles.main}>
      <div className={styles.upper}>
        <img
          className={styles.image}
          src={bookId.imageLinks && bookId.imageLinks.thumbnail}
          alt="poster"
        />
        <div className={styles.category}>
          <h1>{bookId.title}</h1>
          <p>Авторы</p>
          <p>Категория</p>
        </div>
      </div>
      <div className={styles.description}>Описание</div>
    </div>
  );
};

export default Detail;
