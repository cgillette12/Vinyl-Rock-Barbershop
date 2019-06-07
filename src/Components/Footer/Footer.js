import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
                <div className='footer-container'>
                    <ul className='footer-list'>
                        <li><h3>Contact Info</h3></li>
                        <li>Phone#:(916) 632-1083</li>
                        <li>Address: 5975 Pacific St, Rocklin, CA 95677</li>
                    </ul>
                </div>
        )
    }
}
