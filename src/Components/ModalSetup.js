import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalSetup = (props) => {
  const { hyperLink, hyperLinkWord, richText, show, handleClose } = props;

  //Modal Bootstrap structure - updating states in ViewList component with props show, handleClose
  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <a href={hyperLink} target="_blank">{hyperLinkWord}</a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{richText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalSetup;
