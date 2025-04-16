// src/components/SideBar/Toolbar.jsx

// Import the React Framework
import React from 'react';

// Importing CSS and Bootstrap
import { Col, Row, Button } from 'react-bootstrap';

const ToolbarButton = ({ icon = "plus", iconSize = 6, globalThemeDark = false }) => {
    return (
        <Col xs={3}>
            <Button className={`btn rounded-circle border ${globalThemeDark && 'btn-dark' || 'btn-light'}` }>
                <i className={`bi bi-${icon} fs-${iconSize}`}></i>
            </Button>
        </Col>
    );
}

const Toolbar = ({ globalThemeDark = false }) => {
    return (
        <Row style={{ height: "7vh" }} className={`align-content-center text-center justify-content-around px-0 border-bottom ${(globalThemeDark && 'bg-dark') || 'bg-light'}`}>
            <ToolbarButton icon='plus' globalThemeDark={globalThemeDark} iconSize={6}/>
            <ToolbarButton icon='upload' globalThemeDark={globalThemeDark} />
            <ToolbarButton icon='search' globalThemeDark={globalThemeDark} />
            <ToolbarButton icon='trash' globalThemeDark={globalThemeDark} />
        </Row>
    );
}

export default Toolbar;