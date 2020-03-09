import React, {Component} from 'react';

class InputChild extends Component {

    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    focusInput() {
        this.inputRef.current.focus();
    }
    render() {
        return <input type="text" ref={this.inputRef}></input>
    }
}

export default InputChild