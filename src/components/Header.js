import React, { Component } from 'react';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import {NavLink} from 'react-router-dom';
import Padding from './Padding';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

class Header extends Component {
    constructor(props){
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            showLoginModal: false,
            showSignUpModal: false
        }
    }

    openLoginModal(){
        this.setState(()=>({showLoginModal:true}));
    }
    openSignUpModal(){
        this.setState(()=>({showSignUpModal:true}));
    }
    handleClose(){
        this.setState(()=>({
            showLoginModal:false,
            showSignUpModal:false
        }))
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="purpleBackground" >
            <Navbar.Brand href="#home">
            <img
                src="images/android-chrome-192x192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Img nt found"
            />
            </Navbar.Brand>
            <Navbar.Brand href="/">Certifyed</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/other">Other</NavLink>
                </Nav>
                <Nav>
                <Padding>
                    <Button className="mybutton" variant="outline-warning" onClick={this.openLoginModal}>Sign In</Button>
                </Padding>
                <Padding>
                    <Button  className="mybutton" variant="outline-warning" onClick={this.openSignUpModal}>Sign Up</Button>
                </Padding>
                </Nav>
            </Navbar.Collapse>
            <LoginModal show={this.state.showLoginModal} handleClose={this.handleClose}/>
            <SignUpModal show={this.state.showSignUpModal} handleClose={this.handleClose}/>
            </Navbar>
        );
    }
}

export default Header;
