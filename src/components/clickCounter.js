import React, {Component} from 'react';
import withCounter from './hocComponent';

class ClickCounter extends Component {
    render() {
        console.log(this.props);
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h5>From Click counter {this.props.name}</h5>
               <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }

} 

export default withCounter(ClickCounter, 2);