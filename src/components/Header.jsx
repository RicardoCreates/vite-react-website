import { useState } from 'react';
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
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Über uns</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}
