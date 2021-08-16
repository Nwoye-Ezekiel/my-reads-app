import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";
import SearchBook from "./SearchBook";

class BooksApp extends Component {
  state = {
    allBooks: [],
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="all-shelves">
              <CurrentlyReading />
              <Read />
              <WantToRead />
              <Link to="/search">
                <div className="open-search">
                  <button>Add a book</button>
                </div>
              </Link>
            </div>
          )}
        />

        <Route exact path="/search" render={() => <SearchBook />} />
      </div>
    );
  }
}

export default BooksApp;
