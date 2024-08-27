import { useState } from 'react';
import { Link } from 'react-router-dom'; // Verwende Link für die Navigation
import './Header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="App-header">
            <div className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? '✖' : '☰'}
            </div>
            <h1 className="headlineOne">Meine Webseite</h1>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>Über uns</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    );
}
