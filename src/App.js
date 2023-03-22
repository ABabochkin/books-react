import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Preloader from "./components/preloader/Preloader";
import { useState } from "react";
import axios from "axios";
import "../src/index.scss";

function App() {
  const [books, setBooks] = useState([]);
  const [pageBook, setPageBook] = useState(12);
  const [bookName, setBookName] = useState("");
  const [sort, setSort] = useState("relevance");
  const [loading, setLoading] = useState(false);
  const URL = "AIzaSyBunYTFXCRD5SFZKVRNZvq883PudUc7C1c";

  const handleInput = (e) => {
    setBookName(e.target.value);
  };

  function handleSelectChange(e) {
    const value = e.target.value;
    setSort(value);
    searchBook(bookName, value);
  }

  async function searchBook(bookName, sort, pageBook) {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${sort}&maxResults=${pageBook}&key=${URL}`
      );
      setBooks(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  }

  return (
    <>
      <Header
        bookName={bookName}
        handleInput={handleInput}
        handleSelectChange={handleSelectChange}
        searchBook={searchBook}
        sort={sort}
      />
      <div className="main">
        {loading ? <Preloader /> : <Main books={books} />}
      </div>
    </>
  );
}

export default App;
