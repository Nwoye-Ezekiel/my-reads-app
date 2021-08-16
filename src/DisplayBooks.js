import React from "react";
import Book from "./Book";

function DisplayBooks(props) {
  return (
    <div className="display-books">
      {/* This enables the loader animation while the fetch api runs before retrieving the data */}
      {props.loader ? (
        <div className="loading-animation-container">
          <div className="loading-animation" />
          <pre> Loading...</pre>
        </div>
      ) : null}

      {/* This displays an image to indicate empty shelf when there are no books in the shelf */}
      {props.loader === false && props.books.length === 0 && (
        <div className="no-books">
          <p>This shelf is empty.</p>
        </div>
      )}

      {/* This displays an image to indicate no books were gotten from the search in the search page */}
      {(props.results === 0 || props.error) && (
        <div className="no-results">
          <p>
            No Books Found.
            <br />
            <small style={{ color: "grey" }}>
              Some valid search terms are: <br /> Android, Art, Astronomy,
              Baseball, Basketball, Biography, Business, Classics, Comics.
            </small>
          </p>
        </div>
      )}

      {/* This passes each book from the books array into the book component */}
      {props.books.map((book, index) => {
        return (
          <Book
            key={index}
            details={book}
            updateCategory={props.updateCategory}
          />
        );
      })}
    </div>
  );
}

export default DisplayBooks;