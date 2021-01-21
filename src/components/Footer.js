import React from 'react'
import { Link } from 'gatsby'
import './Footer.module.scss'

const menu  = [
    {
        url:'#',
        title: 'About'
    },
    {
        url:'#',
        title: 'Help Center'
    },
    {
        url:'#',
        title: 'Terms of Service'
    },
    {
        url:'#',
        title: 'Privacy Policy'
    },
    {
        url:'#',
        title: 'Cookie Policy'
    },
    {
        url:'#',
        title: 'Ads info'
    },
    {
        url:'#',
        title: 'Blog'
    },
    {
        url:'#',
        title: 'Status'
    },
    {
        url:'#',
        title: 'Career'
    },
    {
        url:'#',
        title: 'Brand Resources'
    },
    {
        url:'#',
        title: 'Advertising'
    },
    {
        url:'#',
        title: 'Marketing'
    },
    {
        url:'#',
        title: 'Twitter for Business'
    },
    {
        url:'#',
        title: 'Developers'
    },
    {
        url:'#',
        title: 'Directory'
    },
    {
        url:'#',
        title: 'Settings'
    },
    {
        url:'#',
        title: `© ${(new Date().getFullYear())} Twitter, Inc.`
    },

]
export default function Footer () {
    return(
            <ul className="d-flex flex-wrap align-items-center">
                {menu.map(item => {
                    return <li className="px-2 list-unstyled " key={item.title}>
                        <Link to={item.url}>{item.title}</Link>
                    </li>
                })}
            </ul>
            
    )
}