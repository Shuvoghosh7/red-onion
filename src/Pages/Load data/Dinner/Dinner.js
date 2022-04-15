import React, { useEffect, useState } from 'react';
import ShowDinner from './ShowDinner';

const Dinner = () => {
    const[dinner,setDinner]=useState([])
 

    useEffect(()=>{
        fetch('Dinner.json')
        .then(res => res.json())
        .then(data => setDinner(data))
    },[])

    return (
        <div className='container '>
          <div className='row'>
          {
                 dinner.map(dinners =><ShowDinner
                 key={dinners.id}
                 dinners={dinners}
                 />)  
            }
          </div>
        </div>
    );
};

export default Dinner;