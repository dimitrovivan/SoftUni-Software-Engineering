import api from '../api';

const getPost = (id) => {

}

const getAllPosts = () => fetch(`${api.baseUrl}/posts`)
                                           .then(res => res.json())

export {
    getAllPosts,
    getPost
}