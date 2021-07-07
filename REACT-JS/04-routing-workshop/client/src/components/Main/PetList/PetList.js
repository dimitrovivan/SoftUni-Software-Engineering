import { Component } from "react";
import PetListItem from "./PetListItem";

class PetList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/pets')
               .then(res => res.json())
               .then(data => this.setState({pets: data}));
    }

    render() {
        return (
            <ul className="other-pets-list">
                {
                  this.state.pets?.map(pet => <PetListItem 
                                                           key={pet.id} 
                                                           name={pet.name}
                                                           imageURL={pet.imageURL}
                                                           category={pet.category}
                                                           description={pet.description}
                                              />
                                       )
               }
            </ul>
        )
    }
}

export default PetList;