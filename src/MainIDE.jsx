//Import the Logo
// import logo from './logo.svg';

// Importing CSS and Bootstrap
import './MainIDE.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Row } from 'react-bootstrap';

//Import the React framework
import React from 'react';

// Importing components
import MainScreen from './components/MainScreen/MainScreen';
import SideBar from './components/SideBar/SideBar';

//Router
function MainIDE({ globalThemeDark, editorThemeDark, setGlobalTheme, setEditorTheme }) {
    return (
        <Container className={`App px-0 ${(globalThemeDark && "bg-dark text-light") || "bg-light text-dark"}`} fluid>
            <Row className='mx-0'>
                <SideBar colSize={2} globalThemeDark={globalThemeDark} />
                <MainScreen colSize={10} globalThemeDark={globalThemeDark} editorThemeDark={editorThemeDark} setGlobalTheme={setGlobalTheme} setEditorTheme={setEditorTheme}/>
            </Row>
        </Container>
    );
}

export default MainIDE;
