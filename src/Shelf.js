import React from "react";
import DisplayBooks from "./DisplayBooks";

function Shelf(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">
        {props.name} ({props.books.length})
      </h4>
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

export default Shelf;