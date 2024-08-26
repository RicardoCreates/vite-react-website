import "./MainContent.css";

export default function MainContent() {
    return (
        <main className="App-main">
            <section id="home" className="centered-content">
                <h2>Willkommen auf meiner Webseite</h2>
                <p>Dies ist eine einfache Webseite, die mit React und Vite erstellt wurde.</p>
            </section>

            <section id="about" className="centered-content">
                <h2>Über uns</h2>
                <p>Wir sind ein Team von Webentwicklern, die es lieben, moderne Webanwendungen zu erstellen.</p>
            </section>

            <section id="contact" className="centered-content">
                <h2>Kontakt</h2>
                <p>Du kannst uns über die folgenden Kanäle erreichen:</p>
                <ul>
                    <li>Email: info@meinewebseite.com</li>
                    <li>Telefon: +49 123 456 789</li>
                </ul>
            </section>
        </main>
    );
}
