import React from 'react'
import { useRef } from 'react';
import { Modal,Button,Form,Alert } from 'react-bootstrap'

export default function LoginComp() {
    const [showForm, setShowForm] = React.useState(false)
    const [error,setError] = React.useState('')

    const emailRef = useRef();
    const passRef = useRef();
    function openForm(){
        setShowForm(true);
    }
    function closeForm(){
        setShowForm(false)
    }
    function submitForm(e){
        e.preventDefault();
        setError('')
        console.log(emailRef.current.value,passRef.current.value)
    }
  return (
    <>
        <div className='btn mx-2' id='register-btn' onClick={openForm}>Login</div>
            <Modal centered show={showForm} onHide = {closeForm}>
                    <form onSubmit={submitForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={passRef} required />
                            </Form.Group>

                            
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeForm}>Cancel</Button>
                            <Button variant="primary" type='submit'>Login</Button>
                        </Modal.Footer>
                    </form>
            </Modal>
        </>
    )
}
