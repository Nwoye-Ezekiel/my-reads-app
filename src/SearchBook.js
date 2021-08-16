import React, { Component } from "react";
import Arrow from "./icons/arrow-back.svg";
import { Link } from "react-router-dom";
import DisplayBooks from "./DisplayBooks";
import * as BooksAPI from "./BooksAPI";

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      allBooks: [],
      value: 0,
      error: true,
    };
  }

  // This function handles changes (i.e each search input made) on the search bar.
  // The returned data must be an object to indicate a correct search input.
  // The accepted data is passed into the sortBooks function in the App.js to get the sorted books to then store in the state.
  handleChange = (event) => {
    let value = event.target.value.length;
    if (value === 0) {
      this.setState({
        error: true,
        allBooks: [],
      });
    } else {
      BooksAPI.search(event.target.value)
        .then((allBooks) => {
          this.setState({
            value: value,
            allBooks: this.props.sortBooks(allBooks),
            error: false,
          });
        })
        .catch((error) => {
          this.setState({
            error: true,
            allBooks: [],
          });
        });
    }
  };

  render() {
    return (
      <div>
        <div className="search-input-wrapper">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search by title or author"
          />
          <Link to="/">
            <img src={Arrow} alt="Arrow" />
          </Link>
        </div>

        <DisplayBooks
          books={this.state.value ? this.state.allBooks : []}
          updateCategory={this.props.updateBook}
          results={this.state.value}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default SearchBook;
