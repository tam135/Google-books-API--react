import React, { Component } from 'react'

export default class BookList extends Component {
    render() {
        return (
            <div>    
                {this.props.items.map((item, i) => {
                    let { title, imageLinks, authors, infoLink } = item.volumeInfo
                    return (
                        <div key = {i} class ="book"> 
                            <img
                                src={imageLinks !== undefined ? imageLinks.thumbnail : ''}
                                alt="book=cover"
                                class="bookImage" />
                            <h3 >{title}</h3>
                            <p >Author: {authors}</p>
                            <a href={infoLink}>Click here to read more</a>
                         
                        </div>
                    )
                })}
            </div >

        );
    }
}