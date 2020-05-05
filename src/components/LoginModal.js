import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';

class LoginModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are seeing a login modal</Modal.Body>
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

export default LoginModal;
