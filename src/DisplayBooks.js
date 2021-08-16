import React from "react";
import Book from "./Book";

function DisplayBooks(props) {
  return (
    <div className="display-books">
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
