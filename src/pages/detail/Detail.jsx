import React from "react";
import styles from "../detail/detail.module.scss";

import Preloader from "../../components/preloader/Preloader";

const Detail = (props) => {
  const { bookId = {}, loading } = props;

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className={styles.main}>
          <div className={styles.upper}>
            <img
              className={styles.image}
              src={bookId.imageLinks && bookId.imageLinks.thumbnail}
              alt="poster"
            />
            <div className={styles.category}>
              <h1>{bookId.title}</h1>
              <p>{bookId.authors}</p>
              <p>{bookId.categories}</p>
            </div>
          </div>
          <div className={styles.description}>{bookId.description}</div>
        </div>
      )}
    </>
  );
};

export default Detail;
