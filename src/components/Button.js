import React from 'react'
import {  Button } from 'react-bootstrap'
import styles from './Button.module.scss'

export default function ControlButton({style}) {
    return (
        <div>
            <Button className={`m-2 ${styles.signup}`} style={style}>Sign up</Button>
            <Button variant="none" className={`m-2 ${styles.login}`} style={style}>Sign In</Button>
        </div>
    );
}
