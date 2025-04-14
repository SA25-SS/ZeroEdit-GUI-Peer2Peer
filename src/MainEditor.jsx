//Import the Logo
// import logo from './logo.svg';

// Importing CSS and Bootstrap
import './MainEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Row} from 'react-bootstrap';

//Import the React framework
import React from 'react';

// Importing components
import MainScreen from './components/MainScreen/MainScreen';
import SideBar from './components/SideBar/SideBar';

//Router
function MainEditor() {
    return (
        <Container className="App px-0" fluid>
            <Row className='mx-0'>
                <SideBar colSize={2}/>
                <MainScreen colSize={10}/>
            </Row>
        </Container>
    );
}

export default MainEditor;
