import React, { useEffect, useState } from 'react';
import ShowBreakfast from './ShowBreakfast';

const Breakfast = () => {
    const[breakfast,setBreakfast]=useState([])
    console.log(breakfast)

    useEffect(()=>{
        fetch('Breakfast.json')
        .then(res => res.json())
        .then(data => setBreakfast(data))
    },[])

    return (
        <div className='container '>
          <div className='row'>
          {
                 breakfast.map(breakf =><ShowBreakfast
                 key={breakf.id}
                 breakf={breakf}
                 />)  
            }
          </div>
        </div>
    );
};

export default Breakfast;