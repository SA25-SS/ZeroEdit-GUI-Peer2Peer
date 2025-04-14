// src/components/SideBar/ActiveUsers.jsx

// Import the React Framework
import React from 'react';

// Importing CSS and Bootstrap
import { Col, Row, Button } from 'react-bootstrap';

const File = ({index, userName, fileOwnerIndex=0, selfIndex=0}) => {
    let user;

    return (
        <Row className='mb-1'>
            <Col>
                <div 
                    key={index} 
                    className={`user ${(index === selfIndex)?'user-self':''} ${(index === fileOwnerIndex)?'user-owner':''} text-start pt-0`}
                >
                    <span>
                        <i className={`bi bi-person-circle`}></i> &nbsp;
                        {userName}
                    </span>
                    <b>
                        <button 
                            onClick={() => console.log(`Editing Permissions of ${userName}`)} 
                            className="user-permissions-menu" 
                            disabled={(index === fileOwnerIndex) || (index === selfIndex)}
                        >
                            <i className='bi bi-three-dots fs-5 text-secondary' ></i>
                        </button>
                    </b>
                </div>
            </Col>
        </Row>
    );
}

const ActiveUsers = ({usersList = ["Shreyas A.", "Sudhanva S", "Rakshita G. A.", "Mohaneesh R. P."], ownerIndex=0, selfIndex=0}) => {
    
    return (
        <Col style={{height:"44vh", textAlign: "left"}}>
            <Row>
                <h5>Recent Files</h5>
            </Row>

            {
                usersList.map((file, index) => <File key={index} index={index} userName={file} fileOwnerIndex={ownerIndex} selfIndex={selfIndex}/>)
            }

        </Col>
    )
}

export default ActiveUsers;