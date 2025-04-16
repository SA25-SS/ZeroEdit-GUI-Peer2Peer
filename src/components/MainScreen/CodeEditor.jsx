// src/components/MainScreen/CodeEditor.jsx

import React, {useRef} from 'react';
import Editor from '@monaco-editor/react';

const LANGUAGES = {
    abap: "abap",            apex: "apex",            azcli: "azcli",          bat: "bat",             bicep: "bicep",
    c: "c",                  clj: "clojure",          coffee: "coffeescript",  cpp: "cpp",             cs: "csharp",
    csp: "csp",              css: "css",              dart: "dart",            dockerfile: "dockerfile", ecl: "ecl",
    ex: "elixir",            exs: "elixir",           fs: "fsharp",            go: "go",               graphql: "graphql",
    hbs: "handlebars",       hcl: "hcl",              html: "html",            ini: "ini",             java: "java",
    js: "javascript",        json: "json",            jl: "julia",             kt: "kotlin",           kts: "kotlin",
    less: "less",            lex: "lexon",            lua: "lua",              m3: "m3",               md: "markdown",
    s: "mips",               dax: "msdax",            sql: "mysql",            mm: "objective-c",      p: "pascal",
    pas: "pascal",           pl: "perl",              php: "php",              txt: "plaintext",       m: "postiats",
    ps1: "powershell",       proto: "protobuf",       pug: "pug",              py: "python",           qs: "qsharp",
    r: "r",                  cshtml: "razor",         redis: "redis",          rst: "restructuredtext", rb: "ruby",
    rs: "rust",              sb: "sb",                scala: "scala",          scm: "scheme",          scss: "scss",
    sh: "shell",             sol: "solidity",         st: "st",                swift: "swift",         sv: "systemverilog",
    tcl: "tcl",              twig: "twig",            ts: "typescript",        vb: "vb",               v: "verilog",
    xml: "xml",              yaml: "yaml",            yml: "yaml"
};


const CodeEditor = ({ editorThemeDark = false, IDEVars }) => {
    const [name, ext] = IDEVars.fileName.get().split(/\.(?=[^\.]+$)/);
    const editorRef = useRef(null);

    const handleEditorChange = (content) => {
        IDEVars.editorContent.set(content);

        if (editorRef.current) {
            const position = editorRef.current.getPosition();
            console.log(`[${position.lineNumber} : ${position.column}] => ${content.split("\n")[position.lineNumber-1][position.column-2]}`);
        }
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    return (
        <div className='px-1 pb-1' style={{ overflow: 'hidden' }}>
            <Editor
                theme={(editorThemeDark && "vs-dark") || "vs-light"}
                language={LANGUAGES[ext] || "txt"}
                defaultValue={IDEVars.editorContent.get()}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
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
