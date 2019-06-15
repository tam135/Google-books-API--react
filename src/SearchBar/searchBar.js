import React, { Component } from 'react'
import './searchBar.css';
export default class searchBar extends Component {
    render() {
        return (
            <div className = "searchBar">
                <label htmlFor="searchBar">Search:</label>
                <input type="text" name="searchBar" id="searchBar" placeholder="Hunger Games" />
                <button type="submit" >Search</button>
            </div>
        )
    }
}
