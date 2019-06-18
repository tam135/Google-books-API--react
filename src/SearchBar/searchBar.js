import React, { Component } from 'react'
import './searchBar.css';
//import $ from 'jquery';
import BookList from '../BookList/BookList';

export default class searchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
        };
        this.onSubmitSearch= this.onSubmitSearch.bind(this);
        this.handleChange= this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    onSubmitSearch = () => {
        const query = this.state.query;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBO1q07l3NnRRsd50NlFD7pz9prfJa6me4`

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong: try again');
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                let {items} = data;
                this.setState({
                    items: items,
                })
                console.log('Data', data);
                console.log("clicked on search  button", this.state.books)
            })
            .catch(err => {
                (console.log('Hanndling the error here', err))
            });
    }
    render() {
        return (
            <div className = "searchBar">
                <label htmlFor="searchBar">Search:</label>
                <input type="text" name="searchBar" id="searchBar" placeholder="Hunger Games" onChange={this.handleChange}/>
                <button type="submit" onClick={this.onSubmitSearch}>Search</button>
                <BookList
                    items={this.state.items} />
            </div>
        
        )
    }
}
