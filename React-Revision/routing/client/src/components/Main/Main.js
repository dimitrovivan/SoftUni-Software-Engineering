import { Switch, Route } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import CreatePet from '../CreatePet/CreatePet';
import MyPets from '../MyPets/MyPets';

const Main = () => {
    return (
        <main id="site-content">
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/add-pet" component={CreatePet} />
                <Route path="/my-pets" component={MyPets} />
            </Switch>
        </main>
    )
}

export default Main;