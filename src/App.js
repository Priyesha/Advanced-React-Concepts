import React from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import Parent from './components/Parent';
import ParentFunctional from './components/ParentFunctional'
import RefsDemo from './components/RefsDemo';
import CallbackRefs from './components/CallBackRefs';
import ClassRef from './components/ClassRef';
import ForwardRefParent from './components/forwardRefParent';
import Portal from './components/Portal';
import CheckName from './components/checkName';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/clickCounter';
import HoverComponent from './components/hoverCounter';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComp/> */}
      {/* <Parent/> */}
      {/* <ParentFunctional/> */}
      {/* <RefsDemo/> */}
      {/* <CallbackRefs/> */}
      {/* <ClassRef/> */}
      {/* <ForwardRefParent/> */}
      {/* <Portal/> */}
      {/* <ErrorBoundary>
      <CheckName name="Priyesha"/>
      <CheckName name="Priyesh"/>
      </ErrorBoundary> */}
      <ClickCounter name="Priyesha"/>
      <HoverComponent/>
    </div>
  );
}

export default App;
