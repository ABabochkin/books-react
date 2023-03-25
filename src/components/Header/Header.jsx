import styles from "../Header/header.module.scss";
import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Header = (props) => {
  const { setBooks, setLoading, topBooks } = props;

  const apiKey = process.env.REACT_APP_API_KEY;

  const [bookName, setBookName] = useState("");
  const [sort, setSort] = useState("relevance");

  const handleInput = (e) => {
    setBookName(e.target.value);
  };

  function handleSelectChange(e) {
    const value = e.target.value;
    setSort(value);
    searchBook(bookName, value);
  }

  const searchBook = async (bookName, sort) => {
    if (bookName) {
      try {
        setLoading(true);
        let response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${sort}&key=${apiKey}`
        );
        setBooks(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Произошла ошибка", error);
      }
    }
  };

  return (
    <div>
      <Link to="/">
        <header className={styles.header}>
          <h1 onClick={topBooks}>Search for books</h1>
        </header>
      </Link>

      <div className={styles.search}>
        <input
          className={styles.text}
          value={bookName}
          placeholder="Enter book title or author"
          onChange={handleInput}
        />
        <button
          className={styles.submit}
          onClick={() => {
            searchBook(bookName, sort);
          }}
        >
          Search
        </button>
      </div>

      <div className={styles.options}>
        <label htmlFor="language">Category:</label>
        <select id="Category">
          <option value="all">All</option>
          <option value="art">Art</option>
          <option value="biography">Biography</option>
          <option value="computers">Computers</option>
          <option value="history">History</option>
          <option value="medical">Medical</option>
          <option value="poetry">Poetry</option>
        </select>

        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sort} onChange={handleSelectChange}>
          <option value="relevance" onClick={searchBook}>
            Relevance
          </option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
