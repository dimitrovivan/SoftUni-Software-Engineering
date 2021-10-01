import { NavLink } from "react-router-dom";

const Pet = ({
    name,
    category,
    imageURL,
    description,
    likes
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={`${imageURL}`} alt="dog" /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <NavLink to="#"><button className="button"><i className="fas fa-heart"></i>Pet</button></NavLink>
                <NavLink to="#"><button className="button">Details</button></NavLink>
                <i className="fas fa-heart"></i> <span>{likes}</span>
            </div>
        </li>
    )
}

export default Pet;