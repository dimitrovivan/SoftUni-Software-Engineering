import { Component } from 'react';

import MainNavigation from './MainNavigation';
import PetList from './PetList';

class Main extends Component {
    render() {
        return (
            <main id='site-content'>
                <section className='dashboard'>
                    <h1>Dashboard</h1>
                    <MainNavigation />
                    <PetList />
                </section>
            </main>
        )
    }
}

export default Main;