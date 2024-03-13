// import logo from './logo.svg';
import './App.css';
import Itrms from './Itrms';
import { useState } from 'react';

function App() {
  const [data , setData] = useState("");
  const [mapData, setMapData]  = useState([]);
  
  const updatData = ()=>{

    setMapData((p) =>{
      return [...p , data]
    })
    setData("");
    console.log(mapData);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Grocery Bud</h2>
          <div>
            <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} />
            <button onClick={updatData}>Add item</button>
          </div>
          {
            mapData.map((e, index) => < Itrms value ={e} idx = {index} mapData = {setMapData} />)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
