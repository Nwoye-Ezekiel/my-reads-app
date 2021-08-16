import React from "react";
import DisplayBooks from "./DisplayBooks";

function WantToRead(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">Want to read</h4>
      <div className="books-container">
        <DisplayBooks books={props.books} />
      </div>
    </div>
  );
}

export default WantToRead;
