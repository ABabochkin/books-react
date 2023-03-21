import React from "react";
import styles from "../Header/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <h1>Search for books</h1>
        <input className={styles.search} type="text" />
        <div className={styles.section}>
          <div className={styles.section1}>
            <p>categories</p>
            <input />
          </div>
          <div className={styles.section2}>
            <p>sorting by</p>
            <input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
