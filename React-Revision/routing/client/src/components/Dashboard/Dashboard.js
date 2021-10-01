import { NavLink, Switch, Route } from "react-router-dom";

import OtherPetsList from "../OtherPetsList/OtherPetsList";

const Dashboard = () => {
    return (
        <section class="dashboard">
          <h1>Dashboard</h1>
          <nav className="navbar">
            <ul>
              <li><NavLink to="/dashboard/all">All</NavLink></li>
              <li><NavLink to="/dashboard/cats">Cats</NavLink></li>
              <li><NavLink to="/dashboard/dogs">Dogs</NavLink></li>
              <li><NavLink to="/dashboard/parrots">Parrots</NavLink></li>
              <li><NavLink to="/dashboard/reptiles">Reptiles</NavLink></li>
              <li><NavLink to="/dashboard/other">Other</NavLink></li>
            </ul>
          </nav>

          <Switch> 
                 <Route path="/dashboard/all" component={OtherPetsList}/>
                 <Route path="/dashboard/dogs" render={() => <h1>You are on Dogs</h1>}  />
                 <Route path="/dashboard/cats" render={() => <h1>You are on Cats</h1>}  />
                 <Route path="/dashboard/parrots" render={() => <h1>You are on parrots</h1>}  />
                 <Route path="/dashboard/other" render={() => <h1>You are on other</h1>}  />
                 <Route path="/dashboard/reptiles" render={() => <h1>You are on reptiles</h1>}  />
                 
          </Switch>

        </section>


    )
}
export default Dashboard;