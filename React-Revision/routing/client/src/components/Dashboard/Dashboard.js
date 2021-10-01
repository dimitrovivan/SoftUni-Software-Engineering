import { NavLink } from "react-router-dom";

import OtherPetsList from "../OtherPetsList/OtherPetsList";

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

          <OtherPetsList />
        </section>


    )
}
export default Dashboard;