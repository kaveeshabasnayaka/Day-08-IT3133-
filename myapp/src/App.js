
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link,NaviLink } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
//import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
        <Router>
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path = '/home' element={<Home/>}/>
              <Route path = '/about' element={<AboutUs/>}/>
              <Route path = '/contact' element={<ContactUs/>}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
