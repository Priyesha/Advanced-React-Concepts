import React from "react";
import MemoComp from "./memoComp";

function ParentFunctional() {
    console.log("Parent functional component render")

return (
    <div>
    <MemoComp/>
  </div>
   )    
  }


export default ParentFunctional;
