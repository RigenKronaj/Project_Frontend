import React, { useState, useEffect } from "react";

export default function App() {
    const [filter, setFilter] = useState("");
    const [books, setBooks] = useState([]);
    const [filterType, setFilterType] = useState("title");

    const getData = () => {
        fetch("http://localhost:8080/articles/" + filterType + "/" + filter)
            .then(res => res.json())
            .then(json => setBooks(json));
    }

    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res => res.json()).then(json => setBooks(json));
    }, []);

    return (
        <div>
            <h1>Library application</h1>
            <input type="text" value={filter} onChange={(event) => {
                setFilter(event.target.value);
            }}></input>
            <select onChange={(event) => {
                setFilterType(event.target.value);
            }} name="filterType">
                <option value="title">Filter by title</option>
                <option value="author">Filter by author</option>
                <option value="genre">Filter by genre</option>
                <option value="type">Filter by type</option>
                <option value="availability">Filter by availability</option>
            </select>
            <button onClick={getData}>Search</button>
            <ul>
                {books.map(book => <ul>
                    <li><h4>{book.title}</h4></li>
                    <li><h5>{book.author}</h5></li>
                    <li><h5>{book.genre}</h5></li>
                    <li><h5>{book.type}</h5></li>
                    <li><h5>{book.availability.toString()}</h5></li>
                    <li><h5>{book.date}</h5></li>
                    <li><h5>{book.dueDate}</h5></li>
                </ul>)}
            </ul>
        </div>
    )
}