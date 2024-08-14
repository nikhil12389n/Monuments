import React,{useState,useEffect} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'

import {Modal} from 'react-bootstrap'
import { loginUser } from '../actions/userActions'
const Loginscreen = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const dispatch=useDispatch()
    const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // useEffect(()=>{
    //     if(localStorage.getItem('currentUser')){

    //         window.location.href="/";

    //     }
    // },[])

    const login=()=>{
        const user={email,password}
        dispatch(loginUser(user))
            .then((response) => {
                if (response.success) {
                    // Show login success modal
                    handleShow();
                    // Redirect to home screen after 2 seconds
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000);
                } else {
                    // Show login error modal
                    handleShow2();
                }
            })
            .catch((error) => {
                console.error('Login failed:', error);
                // Handle login error
            });
    }
    const redirectToRegister = () => {
         // Redirect to the register page
         window.location.href="/register";
    };

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" 
                    onClick={login}>
                        Submit
                    </Button>

                    <p>Don't have an account ? <a style={{cursor:'pointer',color:'blue'}} onClick={redirectToRegister}>Register</a></p>

                </Form>
            </Container>

            <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login Failed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Invalid email or password. Please try again.
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose2}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>
            
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Login Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        You have successfully logged in.
                        </Modal.Body>
                        
                    </Modal>
        </>
    )
}

export default Loginscreen
