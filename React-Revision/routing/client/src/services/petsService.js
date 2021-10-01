import api from '../api';

const getAllPets = () => {
    return fetch(`${api.BASE_URL}/pets`)
                  .then(res => res.json())
}

export {
    getAllPets
}