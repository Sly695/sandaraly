import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index'; 
import Contact from './pages/contact';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/success" element={<Success/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
