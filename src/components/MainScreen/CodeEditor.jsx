// src/components/MainScreen/CodeEditor.jsx

import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language = "python", value = "", onChange, editorThemeDark=false }) => {
  return (
    <div className='px-1 pb-1' style={{ overflow: 'hidden'}}>
      <Editor
        theme={(editorThemeDark && "vs-dark") || "vs-light"}
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
