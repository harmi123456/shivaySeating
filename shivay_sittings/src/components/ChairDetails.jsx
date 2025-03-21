import React from 'react'
import { useParams } from 'react-router-dom';
import { chairsData } from './chairData';

export default function ChairDetails() {
    const { id } = useParams(); 
    const chair = chairsData.find(ch => ch.id === parseInt(id));
  
    if (!chair) {
      return <h2>Chair not found!</h2>;
    }

    return (
        <div>
            <div className="chair-details">
              <img src={chair.image} alt={chair.name} />
              {/* <img src={`/img/${chair.image}`} alt={chair.name} /> */}
                <h1>{chair.name}</h1>
                <h2>{chair.price}</h2>
                <p>{chair.description}</p>
            </div>
        </div>
    )
}
