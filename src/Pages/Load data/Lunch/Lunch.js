import React, { useEffect, useState } from 'react';
import ShowLunch from './ShowLunch';

const Lunch = () => {
    const [lunch, setLunch] = useState([])
    console.log(lunch)
    useEffect(() => {
        fetch('lunc.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {
                    lunch.map(lunc => <ShowLunch
                        key={lunc.id}
                        lunc={lunc}
                    />)
                }
            </div>
        </div>
    );
};

export default Lunch;