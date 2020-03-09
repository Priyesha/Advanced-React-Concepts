import React, { Component } from 'react'
import InputChild from './InputChild'

class ClassRef extends Component {

    constructor() {
        super();
        this.ClassRef = React.createRef();
    }

    clickHandler = () => {
        this.ClassRef.current.focusInput();
    }
    render() {
        return (
            <div>
               <InputChild ref={this.ClassRef}></InputChild>
               <button onClick={this.clickHandler}>Focus Input</button> 
            </div>
        )
    }
}

export default ClassRef
