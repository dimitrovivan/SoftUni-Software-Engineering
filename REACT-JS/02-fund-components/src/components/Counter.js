import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
           counter: 5
        }
    }

    render() {
        return (
            <div className="counter-container">
                <button onClick={this.subtractCounter.bind(this)}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={this.addCounter.bind(this)}>+</button>
                <button onClick={this.reset.bind(this)}>Reset</button>

            </div>
        )
    }

    subtractCounter() {
       this.setState(oldState => {
           if(oldState.counter - 1 < 0) return;
           return {counter: oldState.counter - 1}
         }
        )
    }

    addCounter() {
        this.setState(oldState => ({counter: oldState.counter + 1}))
    }

    reset() {
        this.setState({counter: 0});
    }
}

export default Counter;