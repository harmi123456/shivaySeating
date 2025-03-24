import React from 'react'
import { useParams } from 'react-router-dom';
import { chairsData, sofasData } from './chairData';

export default function ChairDetails() {

  const { id } = useParams();  // Get the parameter from the URL

  // Convert the id to a number
  const numericId = parseInt(id);

  // Find chair and sofa using the correct ID
  const chair = chairsData.find(ch => ch.id === numericId);
  const sofa = sofasData.find(so => so.sofa_id === numericId);

  if (!chair && !sofa) {
    return <h2>Item not found!</h2>;
  }


  return (
    <div>

      {chair && (
        <div className="chair-details">
          <img src={chair.image} alt={chair.name} />
          <h1>{chair.name}</h1>
          <h2>{chair.price}</h2>
          <p>{chair.description}</p>
        </div>
      )}

      {sofa && (
        <div className="sofa-details">
          <img src={sofa.image} alt={sofa.name} />
          <h1>{sofa.name}</h1>
          <h2>{sofa.price}</h2>
          <p>{sofa.description}</p>
        </div>
      )}


    </div>
  )
}
