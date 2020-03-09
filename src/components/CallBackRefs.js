import React, {Component} from 'react';

class CallbackRefs extends Component {

    constructor() {
        super();
        this.cbRef = null;
        this.setcbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        console.log(this.cbRef);
            this.cbRef.focus();
    }

    clickHandler = () => {
        console.log('Entered value is ' , this.cbRef.value);
    }
    render() {
        return (
        <React.Fragment>    
        <input type="text" ref={this.setcbRef}></input>
        <button onClick={this.clickHandler}>Set Value</button>
        </React.Fragment>
        )
    }
}

export default CallbackRefs;