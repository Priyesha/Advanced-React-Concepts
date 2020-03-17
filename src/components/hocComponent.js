import React from 'react';

const withCounter = (WrappedComponent, incrementByNumber) => {
    class NewComponent extends React.Component {

       constructor() {
           super();
           this.state = {
               count: 0
           }
       }
       
       incrementCount = () => {
           this.setState(previousState => {
               return { count: previousState.count + incrementByNumber }
           }
        )
       }
       render() {
           return (
               <div>
                   <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
               </div>
           )
       }
    }
    return NewComponent;
}

export default withCounter;