import React from "react";
import DisplayBooks from "./DisplayBooks";

function WantToRead(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">Want to read ({props.books.length})</h4>
      <div className="books-container">
        <DisplayBooks
          books={props.books}
          updateCategory={props.updateBook}
          loader={props.loader}
        />
      </div>
    </div>
  );
}

export default WantToRead;