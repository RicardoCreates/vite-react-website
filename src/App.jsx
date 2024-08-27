
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Contact from './components/Contact';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}
