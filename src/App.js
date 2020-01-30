import React, {useState, useEffect} from 'react';
import './App.scss';
// import WorldMap from './components/worldmap/worldmap.component';
import USAMap from './components/usmap/usmap.component'
import CAMap from './components/camap/camap.component'

const App= () => {

  // const [regions, setRegions] = useState([]);

  // const handleRegionsClick = e =>  {
    //  if(regions.includes(e.currentTarget.id)){
          // e.currentTarget.setAttribute('class', 'yellow')
    //       const boss = regions.filter(region => {
    //          return region.id !== e.currentTarget.id
    //      })
    //      const { id, name, d } = boss;
    //      const daboss = {id, name, d};

    //      return setRegions([...daboss])
    // } else {
    //     e.currentTarget.setAttribute('class', 'red')
    //     const id=e.currentTarget.getAttribute('id');
    //     const name=e.currentTarget.getAttribute('name');
    //     const d=e.currentTarget.getAttribute('d');
    //     const region = { id, name, d};
    //     return setRegions([...regions, region])
    // }
  
  //}

  //  useEffect(() => {
  //    regions.map(region => {
  //      return console.log(region)
  //    })
  //  }, [regions])

  const [regions, setRegions] = useState([]);

   const handleRegionsClick = e => {
    if(regions.includes(e.currentTarget)){
        e.currentTarget.setAttribute('class', 'yellow')
        const boss = regions.filter(region=>{
            return region.id !== e.currentTarget.id
        })
        return setRegions([...boss])
    }
    e.currentTarget.setAttribute('class', 'red')
    return setRegions([...regions, e.currentTarget])

}

  return (
    <div className='app-body'>
     {/* <WorldMap /> */}
      {/* <div class='input-container'>
        <label htmlFor="states-box">Selected Countries: </label>
        <input id="states-box" type="text" value={regions.map(region=>region.id).join()}/>
      </div> */}
      <div class='maps-container'>
        <USAMap height={20} width={30} handleClick={handleRegionsClick} />
        <CAMap height={20} width={30} handleClick={handleRegionsClick} />
      </div>
    </div>
  );
}

export default App;
