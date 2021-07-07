import { Component } from "react";
import { NavLink } from "react-router-dom";

class PetListItem extends Component {
    render() {
        return (
            <li className="otherPet" key={this.props.id}>
                    <h3>Name: {this.props.name}</h3>
                    <p>Category: {this.props.category}</p>
                    <p className="img"><img src={this.props.imageURL} alt={`${this.props.name} image`}/></p>
                    <p className="description">{this.props.description}</p>
                    <div className="pet-info">
                        <NavLink to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></NavLink>
                        <NavLink to={`/pet/details/$:id`}><button className="button">Details</button></NavLink>
                        <i className="fas fa-heart"></i> <span> 4</span>
                    </div>
                </li>
        )
    }
}

export default PetListItem;