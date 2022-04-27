import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Main.css"

export default function App() {

    // Declaring the state variables of the component

    const [filter, setFilter] = useState("");
    const [books, setBooks] = useState([]);
    const [filterType, setFilterType] = useState("title");
    const [availability, setAvailability] = useState(false);

    // Declaring a function to fetch data once requested by the user

    const getData = () => {
        if (availability) {
            if (filter === "") {
                fetch("http://localhost:8080/articles/available")
                    .then(res => res.json())
                    .then(json => setBooks(json));
            }
            else {
                fetch("http://localhost:8080/articles/available/" + filterType + "/" + filter)
                    .then(res => res.json())
                    .then(json => setBooks(json));
            }
        }
        else {
            if (filter === "") {
                fetch("http://localhost:8080/articles")
                    .then(res => res.json())
                    .then(json => setBooks(json));
            }
            else {
                fetch("http://localhost:8080/articles/" + filterType + "/" + filter)
                    .then(res => res.json())
                    .then(json => setBooks(json));
            }
        }
    }

    // Calling the fetch API upon loading the component to retrieve the articles
    
    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res => res.json()).then(json => setBooks(json));
    }, []);

    return (
        <div className="main--body">
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <h1 className="header-text">LIBRARY APPLICATION</h1></header>
            <div className="header--nav">
                <div className="box">
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
                    </select>
                    <button onClick={getData} className="search-btn">Search</button>
                    <input type="checkbox" onChange={() => {
                        setAvailability((prevState) => !prevState);
                    }}></input>
                    <label>Check for available books only</label>
                    <Link to={"/reservations"}><button className='reservation-button'>Check my reservations</button></Link>
                </div></div>
            <div className="main--">
                {books.map(book => <div>
                    <div>
                        <a href={"http://localhost:3000/" + book.id}>
                            <img src={book.src} className="main--img" alt="default" />
                        </a>
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
            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}