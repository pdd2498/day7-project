import React, { useState } from 'react'

export default function Itrms({ idx, value , mapData}) {


    const [checkbox , setCheck] = useState(false);

    const deletes = ()=>{
        mapData((p) =>{
            const data = [...p];
            data.splice(idx , 1);
            return data;
        })
    }

  return (
    
    <div className='flex'>
        <input type="checkbox" onChange={() =>{
            return setCheck((e) => !e);
            }} />
        <p style={{
            textDecoration : checkbox ? 'line-through' : 'none'
        }}>{value}</p>
        <button onClick={deletes}>DELETE</button>
    </div>
  )
}
