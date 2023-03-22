import styles from "../Header/header.module.scss";

const Header = (props) => {
  const { bookName, handleInput, handleSelectChange, searchBook, sort } = props;
  return (
    <div>
      <header className={styles.header}>
        <h1>Search for books</h1>
      </header>

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
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
