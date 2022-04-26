import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Main.css"

export default function Book() {

    let params = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/articles/" + params.bookID).then(res => res.json()).then(json => setBook(json));
    }, []);

    return (
        <div>
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <h1 className="header-text">LIBRARY APPLICATION</h1>
            </header>
            <div style={{ display: 'inline-block' }}>
                <img src={book.src} alt="default" height="600" />
            </div>
            <div style={{ display: 'inline-block', verticalAlign: 'top', marginLeft: '5%' }}>
                <h2>{book.title}</h2>
                <h2>Author: {book.author}</h2>
                <h2>Genre: {book.genre}</h2>
                <p>Ut cursus enim nibh, scelerisque ullamcorper nibh molestie at. Fusce quis congue velit. Duis ipsum sem,<br />
                    luctus et sollicitudin ut, accumsan at quam. Sed maximus nibh et ipsum consequat, vitae varius metus efficitur.<br />
                    Phasellus pharetra pharetra arcu non dapibus. In molestie dignissim tempus. Vivamus sed sagittis ex. Mauris<br />
                    convallis sem.</p>
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}