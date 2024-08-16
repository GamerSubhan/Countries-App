import Countries from './components/Countries.js';
import Country from './components/Country.js';
import Header from './components/Header.js';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />}></Route>
        <Route path='/country/:name' element={<Country />}></Route>  
      </Routes>
    </Router>
  );
}

export default App;