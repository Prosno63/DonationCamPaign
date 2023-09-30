import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';


const FeatureDonat = () => {

    const [places, SetPlaces] = useState([]);
    useEffect( () => {
        fetch('places.json')
        .then(res => res.json())
        .then(data => SetPlaces(data));

    }, [])


   

    
    return (
        <div>
            <h1 className='text-2xl lg:text-4xl text-center pt-4' > <span className='font-bold text-3xl lg:text-5xl'>{places.length}</span> NGO's Where Can You Make a Change</h1>
            <div  className="grid grid-cols-1 lg:grid-cols-4 gap-3 p-4 md:grid-cols-2"  >
                {
                    places.map(place => <Place key ={place.id} place ={place}></Place>)
                }
            </div>
            
        </div>
      
    );
};

export default FeatureDonat;