import { useState, useEffect } from 'react';

import Pet from './Pet/Pet';
import * as petsService from '../../services/petsService'

const OtherPetsList = () => {
    const [pets, setPets] = useState();

    useEffect( () => {
        petsService.getAllPets()
        .then(setPets)
        .catch(console.log);
    }, [])
    
    return (
        <ul className="other-pets-list">
            {
              pets?.map(pet => 
                             <Pet 
                                 key={pet._id}
                                 name={pet.name}
                                 description={pet.description}
                                 imageURL={pet.imageURL}
                                 likes={pet.likes}
                                 category={pet.category}
                             />
                             
                             )}
                             
        </ul>
    )
}

export default OtherPetsList;