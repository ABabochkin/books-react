import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Detail from "../src/pages/detail/Detail";
import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import "../src/index.scss";

function App() {
  const [books, setBooks] = useState([]);
  const [bookId, setBookiId] = useState({});
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const topBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=''&key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.items));
  };

  useEffect(() => {
    topBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header setBooks={setBooks} setLoading={setLoading} topBooks={topBooks} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main
              books={books}
              setBooks={setBooks}
              loading={loading}
              setLoading={setLoading}
              setBookiId={setBookiId}
            />
          }
        ></Route>
        <Route
          exact
          path="/book"
          element={<Detail bookId={bookId} loading={loading} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
