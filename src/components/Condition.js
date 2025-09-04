import React, { useState } from 'react'

function Condition() {
    const[num,setNum]=useState(0);
    
    //conditional rendering
  return (
    <div>
        <h1>Number: {num}</h1>
        <h2>{num%2===0 ? 'Even Number':'Odd Number'}</h2>
      <button onClick={()=>setNum(num+1)}>Increment</button>
    </div>
  )
}

export default Condition
