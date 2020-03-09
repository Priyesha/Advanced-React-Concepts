import React, {Component} from 'react';
import ForwardRefInputChild from './forwardRefInputChild';

class ForwardRefParent extends Component {

   constructor() {
       super();
       this.inputRef = React.createRef();
   }

  clickHanlder = () => {
    this.inputRef.current.focus();
  }  
  render() {
      return (
          <React.Fragment>
              <ForwardRefInputChild ref={this.inputRef}/>
              <button onClick={this.clickHanlder}>Focus Input from Parent</button>
          </React.Fragment>
      )
  }
}
export default ForwardRefParent;