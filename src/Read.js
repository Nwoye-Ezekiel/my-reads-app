import React from "react";
import DisplayBooks from "./DisplayBooks";

function Read(props) {
  return (
    <div className="shelf-container">
      <h4 className="shelf-header">Read</h4>
      <div className="books-container">
        <DisplayBooks books={props.books} />
      </div>
    </div>
  );
}

export default Read;