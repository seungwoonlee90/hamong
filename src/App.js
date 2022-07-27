import './App.css';
import Navbar from './components/Navbar';
import GridInfo from './components/Grid';
import data from './data';
import { useState } from 'react';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
    <Navbar />
    { shoes.map(function(a, i){
      return <GridInfo shoes={shoes[i]}/>
    })}
    </div>
  );
}

export default App;
