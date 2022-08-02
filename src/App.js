import './App.css';
import Navbar from './components/Navbar';
import GridInfo from './components/Grid';
import Detail from './routes/Detail';
import Pages404 from './routes/404pages';
import About from './routes/About';
import data from './data';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={
        shoes.map(function(a, i){
      return <GridInfo shoes={shoes[i]} key={i}/>
    })}/>
      <Route path="/detail" element={Detail} shoes={shoes} />
      <Route path="/about" element={About} />
      <Route path="*" element={Pages404} />
    </Routes>

    </div>
  );
}

export default App;
