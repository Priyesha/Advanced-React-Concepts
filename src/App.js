import React from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import Parent from './components/Parent';
import ParentFunctional from './components/ParentFunctional'

function App() {
  return (
    <div className="App">
      <FragmentDemo/>
      {/* <Table/> */}
      {/* <PureComp/> */}
      <Parent/>
      <ParentFunctional/>
    </div>
  );
}

export default App;
