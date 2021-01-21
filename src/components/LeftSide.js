import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faPeopleArrows , faComment} from "@fortawesome/free-solid-svg-icons";
import styles from './LeftSide.module.scss'
//import image from '../images/twitter.svg'

export default function LeftSide() {
    return(
        <div className={styles.side}>
        
            <div className="d-flex flex-column ">
                <p><FontAwesomeIcon icon={faSearch} size="xs" /><span>Follow your interests.</span></p>
                <p><FontAwesomeIcon icon={faPeopleArrows} size="xs" /><span>Hear what people are talking about.</span></p>
                <p><FontAwesomeIcon icon={faComment} size="xs" /><span>Join the conversation.</span></p>
            </div>
   
        </div>
        
    )
}