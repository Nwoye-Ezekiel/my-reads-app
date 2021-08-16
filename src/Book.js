import React from "react";

function Book(props) {
  // This function handles any select change and sends the book object and the new shelf chose to the update function in the App.js to update the books state.
  const handleSelect = (event) => {
    props.updateCategory(props.details, event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        {/* The select functionality for switching between different shelves */}
        <div className="book-shelf-changer">
          <select value={props.details.shelf} onChange={handleSelect}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="wantToRead">Want to Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {/* Book title gotten from the book object is included and any without a title is handled*/}
      <div className="book-title">
        {props.details.title ? (
          <div className="title">{props.details.title}</div>
        ) : (
          <div className="title">No Title</div>
        )}
      </div>

      {/* Book authors gotten from the book object is included and those without an author are handled */}
      {props.details.authors ? (
        props.details.authors.map((author, index) => {
          return (
            <li key={index} className="book-author">
              {author}
            </li>
          );
        })
      ) : (
        <div className="book-author">No Author</div>
      )}
    </div>
  );
}

export default Book;