import React from "react";

import Book from "../components/Book/Book";

const Main = (props) => {
  const { books = [] } = props;

  return (
    <>
      <div className="markup">
        {books.map((book) => {
          return <Book key={book.id} book={book} />;
        })}
      </div>
      <div className="container-btn">
        <button className="load">Load more</button>
      </div>
    </>
  );
};

export default Main;
