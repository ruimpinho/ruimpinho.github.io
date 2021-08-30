import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 22
    };
    render() {
        return (
        <React.Fragment>
            <span>{this.state.count}</span>
            <button>Rui</button>
        </React.Fragment>
        );
    }
}
 
export default Counter;