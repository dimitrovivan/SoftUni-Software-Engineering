import { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import MainNavigation from './MainNavigation';
import PetList from './PetList';

class Main extends Component {
    render() {
        return (
            <main id='site-content'>
                <section className='dashboard'>
                    <h1>Dashboard</h1>
                    <Switch>
                        <Route path="/" exact component={PetList}/>
                        <Route path="/categories/:category" exact component={PetList}/>
                    </Switch>
                    <MainNavigation />
                    <PetList />
                </section>
            </main>
        )
    }
}

export default Main;