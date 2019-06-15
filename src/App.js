import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: []
    }
  }

  componentDidMount() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=yourAPIKey`

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong: try again');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          isLoaded: true
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <div>
        <BookApp />
      </div>
    )
  }
}

