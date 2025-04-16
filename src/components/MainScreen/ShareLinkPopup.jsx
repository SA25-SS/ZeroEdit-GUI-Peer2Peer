import React from 'react';
import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';

function ShareLinkPopup({ show, onHide, link }) {
  // If you always use the same link, you can hardcode it here instead of passing as a prop.
  // But using props allows flexibility (parent can supply the link).
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      
      <Modal.Body>
        <InputGroup>
          {/* Readonly text field displaying the link */}
          <FormControl
            value={link}
            aria-label="Link to copy"
            readOnly
          />
          {/* Button to copy the link */}
          <Button variant="primary" onClick={handleCopy}>
            Copy
          </Button>
        </InputGroup>
      </Modal.Body>
      
    </Modal>
  );
}

export default ShareLinkPopup;
