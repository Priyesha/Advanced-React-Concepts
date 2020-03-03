import React, {PureComponent} from 'react';

class PureComp extends PureComponent {
    render() {
        console.log('Pure component render');
        return <h2>
            {this.props.name}
        </h2>
    }
}

export default PureComp;