import React, { useEffect, useState } from 'react'
function Effect() {
    //state var
    const[name,setName]=useState('');
    useEffect(()=>{
        const saved=localStorage.getItem('name');
        if(saved) setName(saved);
        },[]//[] to get value again

    );
    const handleChange=(e)=>{
        setName(e.target.value);//event.target.value
        //get name from value and store in web local storage
        localStorage.setItem('name',e.target.value);
    }
  return (
    <div>
      <input type='text' placeholder='Enter your Name' value={name} onChange={handleChange} />
      <p>Hello,{name || 'Stranger'}</p>
    </div>
  )
}

export default Effect
