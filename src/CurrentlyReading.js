import React from "react";
import DisplayBooks from "./DisplayBooks";

function CurrentlyReading(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">Currently reading ({props.books.length})</h4>
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

export default CurrentlyReading;