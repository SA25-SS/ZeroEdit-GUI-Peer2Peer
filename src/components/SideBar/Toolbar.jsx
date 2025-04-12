// src/components/SideBar/Toolbar.jsx

// Import the React Framework
import React from 'react';

// Importing CSS and Bootstrap
import { Col, Row, Button } from 'react-bootstrap';

const ToolbarButton = ({ icon="plus", iconSize=6 }) => {
    return (
        <Col xs={3}>
            <Button className='toolbar-button'>
                <i className={`bi bi-${icon} fs-${iconSize}`}></i>
            </Button>
        </Col>
    );
}

const Toolbar = () => {
    return (
        <Row style={{ height:"7vh", backgroundColor:'grey'}} className='align-content-center text-center justify-content-around px-0'>
            <ToolbarButton icon='plus'/>
            <ToolbarButton icon='upload'/>
            <ToolbarButton icon='search'/>
            <ToolbarButton icon='trash'/>
        </Row>
    );
}

export default Toolbar;