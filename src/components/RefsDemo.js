import React, {Component} from 'react';

class RefsDemo extends Component {

    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    clickHandler = () => {
        console.log('Entered value is ' , this.inputRef.current.value);
    }
    render() {
        return (
        <React.Fragment>    
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Set Value</button>
        </React.Fragment>
        )
    }
}

export default RefsDemo;