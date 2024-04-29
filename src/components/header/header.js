import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

function HeaderFun(args) {
    const [isOpen, setIsOpen] = useState(false);
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loggedIn, setLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const toggle = () => setIsOpen(!isOpen);
    const toggleLoginModal = () => setLoginModal(!loginModal);
    const toggleRegisterModal = () => setRegisterModal(!registerModal);

    const handleLogin = () => {
        const requestBody = {
            email: loginEmail,
            password: loginPassword
        };

        fetch('https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful:', data);
                if (data.status == 500) {
                    setErrorMessage(data.message)
                }
                else {
                    toggleLoginModal();
                    setLoginEmail("")
                    setLogin("")
                    setRegisterEmail("")
                    setRegisterPassword("")
                    localStorage.setItem("loggedIn", "true")
                    localStorage.setItem("email", data.email)
                    setLogin(true)
                    window.location.reload()
                }
                
            })
            .catch(error => {
                console.error('Login error:', error.message);
               
            });
    };

    const handleRegister = () => {
        const requestBody = {
            email: registerEmail,
            password: registerPassword
        };

        fetch('https://vara-new-api.eba-8td7muy2.us-west-2.elasticbeanstalk.com/vara/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                // Handle successful login
                console.log('Registration successful:', data);
                // Close the modal after handling login
                if (data.status == 500) {
                    setErrorMessage(data.message)
                }
                else {
                    toggleRegisterModal();
                    setLoginEmail("")
                    setLogin("")
                    setRegisterEmail("")
                    setRegisterPassword("")
                    window.location.reload()
                }

            })
            .catch(error => {
                console.error('Login error:', error.message);
                // setErrorMessage(error.message)
            });

    };

    const logout = () => {
        localStorage.removeItem("loggedIn")
        localStorage.removeItem("email")
        window.location.reload()
    }

    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/">Vara</NavbarBrand>
                {!localStorage.getItem("loggedIn") &&
                    (
                        <>
                            <NavbarText style={{ float: "right", position: 'relative', left: '40vw', cursor: "pointer" }} onClick={toggleLoginModal}>Login</NavbarText>
                            <NavbarText style={{cursor: "pointer" }} onClick={toggleRegisterModal}>Register</NavbarText>
                        </>
                    )

                }
                {localStorage.getItem("loggedIn") &&
                    (
                        <NavbarText style={{cursor: "pointer" }} onClick={logout}>Logout</NavbarText>
                    )

                }

            </Navbar>

            {/* Login Modal */}
            <Modal isOpen={loginModal} toggle={toggleLoginModal}>
                <ModalHeader toggle={toggleLoginModal}>Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="loginEmail">Email</Label>
                            <Input
                                type="email"
                                name="loginEmail"
                                id="loginEmail"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="loginPassword">Password</Label>
                            <Input
                                type="password"
                                name="loginPassword"
                                id="loginPassword"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </FormGroup>
                    </Form>
                    {errorMessage && (
                        <Alert color="danger">
                            {errorMessage}
                        </Alert>
                    )
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleLogin}>
                        Login
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleLoginModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            {/* Register Modal */}
            <Modal isOpen={registerModal} toggle={toggleRegisterModal}>
                <ModalHeader toggle={toggleRegisterModal}>Register</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="registerEmail">Email</Label>
                            <Input
                                type="email"
                                name="registerEmail"
                                id="registerEmail"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="registerPassword">Password</Label>
                            <Input
                                type="password"
                                name="registerPassword"
                                id="registerPassword"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </FormGroup>
                    </Form>
                    {errorMessage && (
                        <Alert color="danger">
                            {errorMessage}
                        </Alert>
                    )
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleRegister}>
                        Register
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleRegisterModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default HeaderFun;
