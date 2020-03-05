import React from 'react';

function MemoComp() {
  console.log('Memo componet render');
  return (
    <h2>Memo Component</h2>
  ) 
}

export default React.memo(MemoComp)