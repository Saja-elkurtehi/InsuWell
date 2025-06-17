import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <HashRouter>
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
