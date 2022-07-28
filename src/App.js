import './App.css';
import Navbar from './components/Navbar';
import GridInfo from './components/Grid';
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
    <Navbar />
    <Link to="/">Home</Link>
    <Link to="/detail">Detail</Link>
    <Routes>
      <Route path="/" element={
        shoes.map(function(a, i){
      return <GridInfo shoes={shoes[i]}/>
    })}/>
      <Route path="/detail" />
    </Routes>

    </div>
  );
}

export default App;
