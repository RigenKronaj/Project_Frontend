import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Main.css";

export default function Booking() {

    const [book, setBook] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/articles/" + params.bookID).then(res => res.json()).then(json => setBook(json));
    }, []);

    return (
        <div>
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <h1 className="header-text">LIBRARY APPLICATION</h1>
            </header>
            <div style={{padding: '10px', margin: '10px'}}>
                <h2>Create a reservation</h2>
                <img src={book.src} alt="default" height="250px"/>
                <h3>{book.title} by {book.author}</h3>
                <form width="300px">
                    <label>First name </label>
                    <input style={{position: 'absolute', right: '65%'}}></input>
                    <br/>
                    <label>Last name </label>
                    <input style={{position: 'absolute', right: '65%'}}></input>
                    <br/>
                    <label>Email </label>
                    <input style={{position: 'absolute', right: '65%'}}></input>
                    <br/>
                    <br/>
                    <label>Please specify the number of days to reserve </label>
                    <input style={{position: 'absolute', right: '65%'}} type="number"></input>
                    <br/>
                    <input type="button" name="button" value="Create reservation"></input>
                </form>
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}