// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import 'rsuite/dist/rsuite.min.css'; // Import RSuite styles

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            <BrowserRouter>
                <Navbar />
                <div style={{ marginLeft: '240px', padding: '20px' }}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
