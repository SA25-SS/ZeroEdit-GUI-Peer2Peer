//Import the React Framework
import React from "react";

// Importing CSS and Bootstrap
import { Row, Col} from 'react-bootstrap';

const SideBar = ({colSize = 2}) => {
    return (
        <Col xs={colSize} >
            <Row style={{height:"7vh"}}>
                Toolbar
            </Row>
            <Row style={{height:"44vh"}}>
                Section 1
            </Row>
            <Row style={{height:"44vh"}}>
                Section 2
            </Row>
            <Row style={{height:"4vh"}}>
                Settings
            </Row>
        </Col>
    );
}

export default SideBar;