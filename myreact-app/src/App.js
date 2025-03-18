import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import Home from './home';

const Header = () => (
  <header style={{ padding: '10px', background: '#007bff', color: 'white', textAlign: 'right' }}>
    <nav>
      <Link to="/login" style={{ margin: '10px', color: 'white', textAlign: 'right' }}>Login</Link>
      <Link to="/registration" style={{ margin: '10px', color: 'white', textAlign: 'right' }}>Register</Link>
      <Link to="/home" style={{ margin: '10px', color: 'white', textAlign: 'right' }}>Home</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer style={{ marginTop: '100px', padding: '10px', background: '#333', color: 'white', textAlign: 'center' }}>
    <p>SVYM</p>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ padding: '15px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
