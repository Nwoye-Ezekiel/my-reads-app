import React from "react";
import DisplayBooks from "./DisplayBooks";

function Read(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">Read ({props.books.length})</h4>
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

export default Read;
