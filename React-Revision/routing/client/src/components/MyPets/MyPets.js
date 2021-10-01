import { Link } from "react-router-dom";

const MyPets = () => {
    return (
        <section className="myPet">
            <h3>Name: Pesho</h3>
            <p>Category: Cat</p>
            <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt="cat"/></p>
            <p className="description">This is my cat Pesho</p>
            <div className="pet-info">
                <Link to="#"><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
                <i className="fas fa-heart"></i> <span>5</span>
            </div>
        </section>

    )
}
export default MyPets;