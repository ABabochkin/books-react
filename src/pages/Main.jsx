import Book from "../components/Book/Book";

import Preloader from "../components/preloader/Preloader";

const Main = (props) => {
  const { books = [], loading, URL, setBookiId, setLoading } = props;

  return (
    <>
      <div className="main">
        {loading ? (
          <Preloader />
        ) : (
          <div className="markup">
            {/*  eslint-disable-next-line array-callback-return */}
            {books.map((book) => {
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;
              let authors = book.volumeInfo && book.volumeInfo.authors;
              if (thumbnail !== undefined && authors !== undefined) {
                return (
                  <Book
                    key={book.id}
                    book={book}
                    URL={URL}
                    setBookiId={setBookiId}
                    setLoading={setLoading}
                    thumbnail={thumbnail}
                    authors={authors}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
