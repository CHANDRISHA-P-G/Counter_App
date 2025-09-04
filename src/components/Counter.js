import React, { useState } from 'react'

function Counter() {
//syntax for state
const[count,setCount]=useState(1);
const[price,setPrice]=useState(250);
//increment function
const increment=()=>{
    setCount(count+1);
    setPrice(price+250);
}
const decrement=()=>{
    if(count>=1){
        setCount(count-1);
        setPrice(price-250);
    }
}
  return (
   <div >
      <div className='producta'>
        <h2 class="display-3">Products</h2>
        <div class="row" style={{backgroundColor:"whitesmoke" ,border:'1px solid grey'}}>
            
            <div class="col-sm-4" style={{marginTop: '20px'}}>
                <img src='https://images-na.ssl-images-amazon.com/images/I/81LXaCy28vL._AC_SL1500_.jpg' alt='Glove' style={{width:'200px',height:'200px'}}/>
            </div>
            <div class="col-sm-8 text-black" style={{marginTop: '50px'}}>
                <h3>Gloves</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className='counter' style={{display:'flex'}}>
                  <button type='button' onClick={decrement} style={{backgroundColor:"burlywood",borderRadius:'5px',maxHeight:'30px'}}>-</button>
                  <p style={{paddingLeft:'10px',paddingRight:'10px'}}>Count: {count}</p>
      
                  <button type='button' onClick={increment} style={{backgroundColor:"burlywood",borderRadius:'5px',maxHeight:'30px'}}>+</button>
                  <p style={{paddingLeft:'10px',paddingRight:'10px'}}>Price: {price}</p>
                </div>
            </div>  
        </div>
      </div>
    </div>
    
  )
}

export default Counter
