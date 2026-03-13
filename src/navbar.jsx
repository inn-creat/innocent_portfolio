import React, { useState } from 'react';
import './app.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <div className='navbar'>
                    <div className='logo'>ACHILAONU</div>
                    <div className={`logo-link ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
                            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                    <button className="hamburger" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
