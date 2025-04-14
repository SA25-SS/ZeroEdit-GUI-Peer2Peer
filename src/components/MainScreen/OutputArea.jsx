// src/components/MainScreen/CodeEditor.jsx

import React, {TextArea} from 'react';

const OutputArea = ({ value="" }) => {
  return (
    <div style={{ maxHeight:"28vh", padding:"0px 0px 0px 5px",  textAlign:"left"}}>
      <h6>Output</h6>
      <textarea name="output" id="output" style={{height:"100%", width:"100%", border:"0"}} placeholder='The output will be shown here' disabled value={value}></textarea>
    </div>
  );
};

export default OutputArea;
