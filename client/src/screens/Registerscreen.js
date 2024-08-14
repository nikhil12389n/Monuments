import React, { useState ,useEffect} from 'react'

import {Modal} from 'react-bootstrap'
import { Container, Button, Form } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'

const Registerscreen=()=> {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [cpassword,setcpassword]=useState('')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show4, setShow4] = useState(false);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
    const dispatch=useDispatch()
    
    
    
    


    const registerHandler=()=>{
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /\d/;
        const gmailRegex = /@gmail\.com$/i; 
        if(!name.trim()){
            handleShow3();
        }
        else if (email.length<1 || !gmailRegex.test(email)) {
            handleShow2();
        }
        else if(password.length<8 || !uppercaseRegex.test(password) || !digitRegex.test(password)){
            handleShow1();
        }
        else if(password!==cpassword){
            handleShow();
        }
        
        else{
     
            const user = { name, email, password, cpassword };
            dispatch(registerUser(user)).then((response) => {
                if (response.success) {
                    // Registration successful, show success message
                    
                    handleShow5();
                    setTimeout(() => {
                        window.location.href = '/login';
                    }, 2000);
                } else {
                    // Registration failed, show error message
                     handleShow4();
                     // or handle error in another way
                }
            }).catch((error) => {
                console.error('Registration failed:', error);
                

                // Handle registration error
            });
        }
    }
  return (
    <>
        <Container>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                        value={name}
                        onChange={(e)=>setname(e.target.value)}
                        placeholder="Enter name"  required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        placeholder="Password" required/>
                        <Form.Text className="text-muted">
                            Min. 8 characters (include atleast 1 Uppercase letter, 1 digit)
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                        value={cpassword}
                        onChange={(e)=>setcpassword(e.target.value)}
                        placeholder="Confirm Password" required
                        />
                    </Form.Group>
                    
                    <Button variant="primary" 
                    onClick={registerHandler}>
                        Register
                    </Button>
                </Form>
            </Container>
            <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Passwords Mismatch</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Passwords do not match. Please try again.
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>

            <Modal show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Invalid Email</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        The email address must be a valid Gmail address (e.g., example@gmail.com).     
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose2}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={show3} onHide={handleClose3}>
                        <Modal.Header closeButton>
                            <Modal.Title>Empty Name</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Please enter your name.
                         </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose3}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Invalid Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        Password must be at least 8 characters long and include at least one uppercase letter and one digit.
               
                         </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose1}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={show4} onHide={handleClose4}>
                        
                        <Modal.Body>
                        User already exists. Please login instead.
                         </Modal.Body>
                        <Modal.Footer>
                            <button className='btn' onClick={handleClose4}>CLOSE</button>
                        </Modal.Footer>
                    </Modal>


                    <Modal show={show5} onHide={handleClose5}>
                        
                        <Modal.Body>
                        User Registered Successfully.
                         </Modal.Body>
                        
                    </Modal>
    </>
  )
}

export default Registerscreen