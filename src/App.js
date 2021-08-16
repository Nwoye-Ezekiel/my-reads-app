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
    loader: false,
    wallpaperBlack: false,
  };

  // This function is for fetching all the books from the server.
  componentDidMount() {
    this.activateAnimation();
    BooksAPI.getAll().then((books) => {
      this.refresh(books);
    });
  }

  // This function is for toggling between the light mode and dark mode wallpaper.
  handleWallpaperToggle = () => {
    this.setState({
      wallpaperBlack: !this.state.wallpaperBlack,
    });
  };

  // This function is for toggling between the light mode and dark mode background and text color.
  handleBackgroundToggle = () => {
    if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };

  // This function is for setting the state to activate the loader animation while the api fetch function runs.
  activateAnimation = () => {
    this.setState({
      loader: true,
    });
  };

  // This function is for setting the state to deactivate the loader animation after the api fetch has been completed.
  deactivateAnimation = () => {
    this.setState({
      loader: false,
    });
  };

  // This function is for updating a book that has been assigned to a new shelf.
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    let old = this.state.books;
    let newBook = true;
    book.shelf = shelf;

    Object.keys(old).forEach((key) => {
      if (old[key].id === book.id) {
        old[key].shelf = shelf;
        newBook = false;
      }
    });
    if (newBook) {
      old = old.concat(book);
    }
    this.refresh(old);
  };

  // This function is for refreshing all the books currently stored in the state.
  refresh = (books) => {
    this.deactivateAnimation();
    this.setState({
      books: books,
      currentlyReading: books.filter(
        (book) => book.shelf === "currentlyReading"
      ),
      wantToRead: books.filter((book) => book.shelf === "wantToRead"),
      read: books.filter((book) => book.shelf === "read"),
    });
  };

  // This function is for sorting out all the books gotten from the search api to identify similar books already stored.
  sortBooks = (allBooks) => {
    Object.keys(allBooks).forEach((allBooksKey) => {
      allBooks[allBooksKey].shelf = "none";
      Object.keys(this.state.books).forEach((selectedBooksKey) => {
        if (
          allBooks[allBooksKey].title ===
            this.state.books[selectedBooksKey].title &&
          allBooks[allBooksKey].id === this.state.books[selectedBooksKey].id
        ) {
          allBooks[allBooksKey].shelf =
            this.state.books[selectedBooksKey].shelf;
        }
      });
    });
    this.setState({
      allBooks,
    });
    return this.state.allBooks;
  };

  render() {
    return (
      <div className="app">
        {/* Route for the main page*/}
        <Route
          exact
          path="/"
          render={() => (
            <div className="all-shelves">
              <div className="wallpaper">
                <img
                  src={
                    this.state.wallpaperBlack ? wallpaperBlack : wallpaperWhite
                  }
                  alt="wallpaper"
                />
              </div>
              <div className="theme-container">
                <button
                  onClick={this.handleWallpaperToggle}
                  className="change-theme change-wallpaper"
                >
                  change wallpaper
                </button>
                <div className="divider" />
                <button
                  onClick={this.handleBackgroundToggle}
                  className="change-theme change-color"
                >
                  change background
                </button>
              </div>
              <CurrentlyReading
                books={this.state.currentlyReading}
                updateBook={this.updateBook}
                loader={this.state.loader}
              />
              <Read
                books={this.state.read}
                updateBook={this.updateBook}
                loader={this.state.loader}
              />
              <WantToRead
                books={this.state.wantToRead}
                updateBook={this.updateBook}
                loader={this.state.loader}
              />
              <Link to="/search">
                <div className="open-search">
                  <button>Add a book</button>
                </div>
              </Link>
            </div>
          )}
        />

        {/* Route for the search component */}
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBook
              updateBook={this.updateBook}
              books={this.state.allBooks}
              sortBooks={this.sortBooks}
              refresh={this.refresh}
              loader={this.state.loader}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
