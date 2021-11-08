import React, {useRef} from 'react';
import cl from './ViewUserReposModal.module.css';
import {Modal, Form, Button} from "react-bootstrap";

const ViewUserReposModal = ({isOpen, confirm, hidden}) => {
    const userNameInput = useRef();

    return (
        <div>
            <Modal show={isOpen} onHide={hidden}>
                <Modal.Header>
                    <Modal.Title>Please enter your GitHub username</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>GitHub Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" ref={userNameInput}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={hidden}>Cancel</button>
                    <button className="btn btn-primary"
                            onClick={() => { confirm({username: userNameInput.current.value})}}>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ViewUserReposModal;