import React, {useState} from 'react';
import './App.scss';
// import WorldMap from './components/worldmap/worldmap.component';
import USAMap from './components/usmap/usmap.component'
import CAMap from './components/camap/camap.component'

const App= () => {

  const [regions, setRegions] = useState([]);

  const handleRegionsClick = e => {
    if(regions.includes(e.currentTarget)){
        //remove css class if item already exists
        e.currentTarget.setAttribute('class', 'yellow')
        const boss = regions.filter(region=>{
            return region.id !== e.currentTarget.id
        })
        return setRegions([...boss])
    }
    //add css class
    e.currentTarget.setAttribute('class', 'red')
    return setRegions([...regions, e.currentTarget])
}

  return (
    <div className='app-body'>
     {/* <WorldMap /> */}
      <div class='input-container'>
        <label htmlFor="states-box">Selected Countries: </label>
        <input id="states-box" type="text" value={regions.map(region=>region.id).join()}/>
      </div>
      <div class='maps-container'>
        <USAMap height={20} width={30} handleClick={handleRegionsClick} />
        <CAMap height={20} width={30} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
}

export default App;
