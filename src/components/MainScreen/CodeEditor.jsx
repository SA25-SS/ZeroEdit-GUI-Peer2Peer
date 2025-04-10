// src/components/CodeEditor.jsx
import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language = "python", value = "", onChange }) => {
  return (
    <div style={{ overflow: 'hidden', paddingLeft:"5px", paddingRight:"0px", paddingBottom:"0px"}}>
      <Editor
        height="100%"
        theme="vs-light"
        defaultLanguage={language}
        defaultValue={value}
        onChange={onChange}
        options={{
          fontSize: 14,
          lineNumbers: 'on',
          minimap: {
            enabled: true,
          },
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
