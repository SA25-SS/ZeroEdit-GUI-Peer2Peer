//Import the Logo
// import logo from './logo.svg';

// Importing CSS and Bootstrap
import './MainIDE.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Row } from 'react-bootstrap';

//Import the React framework
import React, { useState } from 'react';

// Importing components
import MainScreen from './components/MainScreen/MainScreen';
import SideBar from './components/SideBar/SideBar';

function MainIDE({ DarkTheme }) {
    const [fileName, setFileName] = useState("somethingcool.js");
    const [editorContent, setEditorContent] = useState("console.log('Something Cool')");
    const [outputContent, setOutputContent] = useState("Something Cool");

    const IDEVars = {
        fileName: {
            value: fileName,
            set: setFileName
        },
        editorContent: {
            value: editorContent,
            set: setEditorContent
        },
        outputContent: {
            value: outputContent,
            set: setOutputContent
        },
    }

    return (
        <Container className={`App px-0 ${(DarkTheme.global.value && "bg-dark text-light") || "bg-light text-dark"}`} fluid>
            <Row className='mx-0'>
                <SideBar colSize={2} DarkTheme={DarkTheme} IDEVars={IDEVars} />
                <MainScreen colSize={10} DarkTheme={DarkTheme} IDEVars={IDEVars} />
            </Row>
        </Container>
    );
}

export default MainIDE;
