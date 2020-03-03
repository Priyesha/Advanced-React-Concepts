import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('Regular component render');
        return (
            <h2>
              {this.props.name}  
            </h2>
        )
    }
}

export default RegComp
