import React from 'react'
import { Form,  Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import styles from '../components/UserAccount.module.scss'
import logo from '../images/logo.png'
import ControlButton from './Button'


export default function UserAccount() {
    return (
        <div className="d-flex flex-column  align-items-center">
            <div className=" mb-5 d-none d-md-block">
                <Form>
                    <div className=" d-inline-flex p-2 w-85">
                    <Form.Group className="w-75">
                        <Form.Control type="email" className="m-2" placeholder="Phone, email, or username" />
                    </Form.Group>    
                        <Form.Group className="w-75">
                            <Form.Control type="password" className="m-2" placeholder="Password" />
                            <Form.Text className="text-muted text-right mr-5"><Link to="#">Forgot password? </Link></Form.Text>
                        </Form.Group>
                        <Button className={`m-2 ml-4 ${styles.inlineLogin}`} variant="none" type="submit">Log In</Button>
                    </div>
                    
                </Form>
            </div>
            <div className="d-flex flex-column mt-5 align-items-center">
                <div className="w-75">
                <img  src={logo} alt="logo" />
                       <p className="mb-5 font-weight-bold fa-2x w-75">See what’s happening in the world right now</p>
                       <div className="d-flex flex-column mb-5">
                            <span className="mb-5 font-weight-bold">Join Twitter today.</span>
                             <ControlButton style={{width: '380px'}}/>
                       </div>
                </div>

            </div>    
        </div>
    )
}