import "./Header.css";

export default function Header() {
    return (
        <header className="App-header">
            <h1>Meine Webseite</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Über uns</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}

