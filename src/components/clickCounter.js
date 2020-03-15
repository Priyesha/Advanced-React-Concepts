import React, {Component} from 'react';
import UpdatedComponent from './hocComponent';

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

export default UpdatedComponent(ClickCounter);