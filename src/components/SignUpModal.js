import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

class SignUpModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are seeing a sign up modal</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SignUpModal;
