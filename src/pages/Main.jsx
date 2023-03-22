import { Book } from "../components/Book";

import Preloader from "../components/preloader/Preloader";

const Main = (props) => {
  const { books = [], loading, detailBook } = props;

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="markup">
          {books.map((book) => {
            return <Book key={book.id} book={book} detailBook={detailBook} />;
          })}
        </div>
      )}
    </>
  );
};

export default Main;
