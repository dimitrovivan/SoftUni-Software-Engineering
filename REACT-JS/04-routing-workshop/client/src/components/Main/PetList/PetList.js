import { Component } from "react";
import { NavLink } from "react-router-dom";

class PetList extends Component {
    render() {
        return (
            <ul class="other-pets-list">
                <li class="otherPet">
                    <h3>Name: Kiro</h3>
                    <p>Category: Dog</p>
                    <p class="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" /></p>
                    <p class="description">This is my dog Kiro</p>
                    <div class="pet-info">
                        <NavLink to="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></NavLink>
                        <NavLink to={`/pet/details/$:id`}><button class="button">Details</button></NavLink>
                        <i class="fas fa-heart"></i> <span> 4</span>
                    </div>
                </li>
            </ul>
        )
    }
}

export default PetList;