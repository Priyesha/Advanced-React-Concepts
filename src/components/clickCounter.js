import React, {Component} from 'react';
import withCounter from './hocComponent';

class ClickCounter extends Component {
    render() {
        console.log(this.props);
        const { count, incrementCount } = this.props;
        return (
            <div>
               <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }

} 

export default withCounter(ClickCounter);