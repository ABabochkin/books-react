import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../src/index.scss";
// import Detail from "./pages/detail/Detail";

function App() {
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState({});
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

  const searchBook = async (bookName, sort) => {
    try {
      setLoading(true);
      const {
        data: { items },
      } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${sort}&key=${URL}`
      );
      setBooks(items);
      setLoading(false);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

  const detailBook = async (id) => {
    try {
      setLoading(true);
      const {
        data: { volumeInfo },
      } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
      setBookId(volumeInfo);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  };

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main loading={loading} books={books} detailBook={detailBook} />
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
