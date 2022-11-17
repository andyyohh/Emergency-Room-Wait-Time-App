import React, { Component } from 'react';
import ERList from './ERList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ERs: [],
            location: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return(
            <div>
                <h2>
                    Emergency Rooms Near You
                </h2>
                <ERList ERs={this.state.ERs} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add New Location"
                        onChange={this.handleChange}
                        value={this.state.location}
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
    handleChange(e) {
        this.setState({ location: e.target.location })
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
