// src/components/SideBar/Toolbar.jsx

// Import the React Framework
import React, { useRef } from 'react';

// Importing CSS and Bootstrap
import { Col, Row, Button } from 'react-bootstrap';

const ToolbarButton = ({ icon = "plus", iconSize = 6, globalThemeDark = false, onClick }) => {
    return (
        <Col xs={3}>
            <Button className={`btn rounded-circle border ${globalThemeDark && 'btn-dark' || 'btn-light'}`} onClick={onClick}>
                <i className={`bi bi-${icon} fs-${iconSize}`}></i>
            </Button>
        </Col>
    );
}

const Toolbar = ({ globalThemeDark = false, IDEVars }) => {
    const fileInputRef = useRef();

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
        console.log("File uploaded");
        IDEVars.editorContent.set(e.target.result);
    };

    const handleUploadFile = () => {
        fileInputRef.current.click();
    };

    const handleFileUploaded = (e) => {
        const file = e.target.files[0];

        if(file){
            IDEVars.fileName.set(file.name)
            fileReader.readAsText(file);
        }
    };

    return (
        <Row style={{ height: "7vh" }} className={`align-content-center text-center justify-content-around px-0 border-bottom ${(globalThemeDark && 'bg-dark') || 'bg-light'}`}>
            <ToolbarButton icon='plus' globalThemeDark={globalThemeDark} iconSize={6} />
            <ToolbarButton icon='upload' globalThemeDark={globalThemeDark} onClick={handleUploadFile} />
            <ToolbarButton icon='search' globalThemeDark={globalThemeDark} />
            <ToolbarButton icon='trash' globalThemeDark={globalThemeDark} />
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUploaded}
            />
        </Row>
    );
}

export default Toolbar;