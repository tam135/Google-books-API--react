import React, { Component } from 'react'
import Header from '../Header/Header';
import SearchBar from '../SearchBar/searchBar';

export default class BookApp extends Component {


    render() {
        return (
            <div className = "bookApp">
                <Header />
                <SearchBar />
            </div>
        )
    }
}
