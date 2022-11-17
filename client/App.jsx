import React, { Component } from 'react';

// import MainContainer from './containers/MainContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>
                    Testing Changes
                </h1>
                {/* <MainContainer/> */}
                <input type="text"/>
                <button>Submit</button>
            </div>
        );
    }
}

export default App;
