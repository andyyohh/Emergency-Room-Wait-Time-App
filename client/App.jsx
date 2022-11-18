import React, { Component, useState } from 'react';
import ERList from './ERList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ERs: [],
            location: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return(
            <div>
                <h2>
                    Urgent Care Centers Near You
                </h2>
                <ERList ERs={this.state.ERs} />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Add New Location"
                            onChange={this.handleChange}
                            // value={this.state.location}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            onChange={this.handleChange}
                            value={this.state.address}
                        />
                    </div>
                    <button onClick={this.handleClick}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
    handleChange(e) {
        this.setState({
             location: e.target.location,
             address: e.target.address
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.location.length === 0) return;
        const newLocation = {
            ERs: this.state.location,
            id: 0
        }
        this.setState(state => ({
            ERs: state.ERs.concat(newLocation),
            location: ''
        }))
    }
}
export default App;
