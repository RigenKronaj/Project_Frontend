import React, { useState, useEffect } from "react";
import "./Main.css"

export default function App() {
    const [filter, setFilter] = useState("");
    const [books, setBooks] = useState([]);
    const [filterType, setFilterType] = useState("title");

    const getData = () => {
        if (filter === "") {
            fetch("http://localhost:8080/articles/")
                .then(res => res.json())
                .then(json => setBooks(json));
        }
        else {
            fetch("http://localhost:8080/articles/" + filterType + "/" + filter)
                .then(res => res.json())
                .then(json => setBooks(json));
        }
    }

    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res => res.json()).then(json => setBooks(json));
    }, []);

    return (
        <div className="main--body">
            <div className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" />
                <h1 className="header-text">LIBRARY APPLICATION</h1></div>
            <div className="header--nav">
                <div class="box">
                    <input type="text" value={filter} onChange={(event) => {
                        setFilter(event.target.value);
                    }} className="input-search"></input>
                    <select onChange={(event) => {
                        setFilterType(event.target.value);
                    }} name="filterType">
                        <option value="title">Filter by title</option>
                        <option value="author">Filter by author</option>
                        <option value="genre">Filter by genre</option>
                        <option value="type">Filter by type</option>
                        <option value="availability">Filter by availability</option>
                    </select>
                    <button onClick={getData} className="search-btn">Search</button></div></div>
            <div className="main--">
                {books.map(book => <div>
                    <div>
                        <img src={book.src} className="main--img" />
                    </div>
                    <div className="main--text">
                        <h4>Book title: {book.title}</h4>
                        <h5>Author: {book.author}</h5>
                        <h5>Genre: {book.genre}</h5>
                        <h5>Type: {book.type}</h5>
                        <h5>Availability: {book.availability.toString()}</h5>
                        <h5>Date: {book.date}</h5>
                        <h5>Due Date: {book.dueDate}</h5>
                    </div>
                </div>)}
            </div>
            <div className='footer--1'>
                <p><div className='footer--text'>©All rights reserved ALBANSI 2022</div></p>
                <p><div className='footer--contact'>Contact us : +355 6X XXX XXXX</div></p>
            </div>
        </div>
    )
}