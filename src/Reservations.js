import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

export default function Reservations() {
    const [input, setInput] = useState();
    const [user, setUser] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [books, setBooks] = useState([]);

    let userReservations = [];

    reservations.forEach(el => {
        books.map(book => {
            if (book.date === el.startDate && book.dueDate === el.endDate) {
                book.id = el.id;
                userReservations.push(book);
            }
        })
    })

    useEffect(() => {
        fetch("http://localhost:8080/articles").then(res => res.json()).then(json => setBooks(json));
    }, []);

    const getData = () => {
        fetch("http://localhost:8080/users/" + input).then(res => res.json()).then(json => setUser(json));
        fetch("http://localhost:8080/booking/" + input).then(res => res.json()).then(json => setReservations(json));
    };

    return (
        <div>
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <Link to="/"><h1 className="header-text">LIBRARY APPLICATION</h1></Link>
            </header>
            <label>enter uid</label>
            <input type="number" onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={getData}>fetch</button>
            <button onClick={() => { console.log(user); console.log(reservations) }}>test</button>
            {user.length > 0 &&
                <div>
                    <h2>Hello, {user[0].name}!</h2>
                    <h3>Your current reservations are: </h3>
                    <ul>
                        {userReservations.map(el => <div><li key={el.id}>{el.title}, {el.id}<button onClick={() => {
                            fetch("http://localhost:8080/booking/" + el.id, { method: 'DELETE' });
                        }} style={{ width: '1.5%', height: '3%', position: 'absolute', left: '20%' }}>x</button></li></div>)}
                    </ul>
                </div>
            }

            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}