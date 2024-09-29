import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar';
import 'rsuite/dist/rsuite.min.css'; 
import Login from './components/Login/Login';
import { FaSign } from 'react-icons/fa';
import SignUp from './components/SignUp/SignUp';

export default function App() {
    return (
        <div style={{ display: 'flex' }}>
            <BrowserRouter>
                <Navbar />
                
                <div style={{ flexGrow: 1, padding: '20px' }}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} /> 
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
