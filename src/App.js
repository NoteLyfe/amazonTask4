import './App.css';
import Header from './Components/Header'
import Catalog from './Components/Catalog'
import Footer from './Components/Footer'
import Pdp from './Components/Pdp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/Pdp" element={<Pdp />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
