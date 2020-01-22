import React from 'react';
import './App.css';
// import WorldMap from './components/worldmap/worldmap.component';
import USAMap from './components/usmap/usmap.component'

function App() {
  return (
    <div className='app-body'>
     {/* <WorldMap /> */}
     <USAMap height={20} width={30} />
    </div>
  );
}

export default App;
