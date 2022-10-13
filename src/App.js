import Header from './Components/Header.jsx'
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVShow from './Pages/TVShow';
import Contacts from './Pages/Contacts';
import { Routes, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/tv-show" element={<TVShow />}/>
      <Route path="/contacts" element={<Contacts />}/>
      </Routes>
  );
}

export default App;
