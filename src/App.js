// import logo from './logo.svg';
import './App.css';
import Itrms from './Itrms';
import { useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

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

  const exp = useRef(0);
  console.log(exp);
  let a = 1;

  const loding = ()=>{
    let ans = document.getElementById('ans');
    let comp = document.getElementById('complite');
    const s = setInterval(() => {
      a += 1;
      
      ans.innerHTML = `${a}%`;
      exp.current.setAttribute('aria-valuenow', a);
      exp.current.style.width = `${a*5}px`;
      // setLoding(a);
      if(a === 100){
        comp.innerText = "Complite"
        updatData();
        clearInterval(s);
     }
      console.log(a);
    }, 100);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <div style={{
          height: "20px",
          width : "500px",
        }}>
            <div ref={exp} aria-valuemin={0} aria-valuemax={100} style={{
              height: "20px",
              backgroundColor:"green",
              
            }}></div>
        </div>
        <p id='complite'>Click on Add item button then loding is start </p>
        <h1 id='ans'></h1>
        <div>
          <h2>Grocery Bud</h2>
          <div>
            <input type="text" value={data} onChange={(e) => {setData(e.target.value)}} />
            <button onClick={loding}>Add item</button>
          </div>
          {
            mapData.map((e, index) => < Itrms value ={e} idx = {index} mapData = {setMapData} />)
          }
        </div>
      </header> */}
            <Editor
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            />
    </div>
  );
}

export default App;
