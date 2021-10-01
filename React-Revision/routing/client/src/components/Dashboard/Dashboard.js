import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <section class="dashboard">
          <h1>Dashboard</h1>
          <nav className="navbar">
            <ul>
              <li><NavLink to="#">All</NavLink></li>
              <li><NavLink to="#">Cats</NavLink></li>
              <li><NavLink to="#">Dogs</NavLink></li>
              <li><NavLink to="#">Parrots</NavLink></li>
              <li><NavLink to="#">Reptiles</NavLink></li>
              <li><NavLink to="#">Other</NavLink></li>
            </ul>
          </nav>
          <ul className="other-pets-list">
            <li className="otherPet">
              <h3>Name: Gosho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt="dog" /></p>
              <p className="description">This is not my cat Gosho</p>
              <div className="pet-info">
                <NavLink to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></NavLink>
                <NavLink to="#"><button className="button">Details</button></NavLink>
                <i className="fas fa-heart"></i> <span> 2</span>
              </div>
            </li>
            <li className="otherPet">
              <h3>Name: Gosho</h3>
              <p>Category: Cat</p>
              <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt="dog" /></p>
              <p className="description">This is not my cat Gosho</p>
              <div className="pet-info">
                <NavLink to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></NavLink>
                <NavLink to="#"><button className="button">Details</button></NavLink>
                <i className="fas fa-heart"></i> <span> 2</span>
              </div>

            </li>
            <li className="otherPet">
              <h3>Name: Kiro</h3>
              <p>Category: Dog</p>
              <p className="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png" alt="dog" /></p>
              <p className="description">This is my dog Kiro</p>
              <div className="pet-info">
                <NavLink to="#"><button className="button"><i class="fas fa-heart"></i> Pet</button></NavLink>
                <NavLink to="#"><button class="button">Details</button></NavLink>
                <i class="fas fa-heart"></i> <span> 4</span>
              </div>
            </li>
          </ul>
        </section>


    )
}

export default Dashboard;