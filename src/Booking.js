import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Main.css";

export default function Booking() {
    return (
        <div>
            <header className="header">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" className="header-img" alt="default" />
                <h1 className="header-text">LIBRARY APPLICATION</h1>
            </header>
            <div>
                i didnt think id get this far i wont lie to you lol
            </div>
            <footer className='footer--1'>
                <div className='footer--text'><p>©All rights reserved ALBANSI 2022</p></div>
                <div className='footer--contact'><p>Contact us : +355 6X XXX XXXX</p></div>
            </footer>
        </div>
    )
}