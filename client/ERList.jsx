import React, { Component } from 'react';

class ERList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.ERs.map(ER => (
                    <li key = {ER.id}>{ER.location}</li>
                ))}
            </ul>
        )
    }
}

export default ERList;
