import './App.css';
import Header from './Components/Header'
import Showcase from './Components/Showcase'
import Footer from './Components/Footer'
import Pdp from './Components/Pdp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/Pdp/:id/:name" element={<Pdp />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
