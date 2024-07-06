import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import ContactUs from './pages/ContactUs';
import Test from './pages/Test';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/programs" element={<Programs />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
     
      
    </div>
  );
}

export default App;
