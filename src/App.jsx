//Import the Logo
// import logo from './logo.svg';

// Importing CSS and Bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row} from 'react-bootstrap';

//Import the React framework
import React from 'react';

// Importing components
import MainScreen from './components/MainScreen/MainScreen';
import SideBar from './components/SideBar/SideBar';

function App() {
    return (
        <Container className="App" fluid>
            <Row>
                <SideBar colSize={2}/>
                <MainScreen colSize={10}/>
            </Row>
        </Container>
    );
}

export default App;
