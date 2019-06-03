import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Barber extends Component {

    render() {
        const { barber } = this.props
        return (
            <div>
                <li>
                    <Link to={`/BarbersProfile/${barber.id}`}>
                        {barber.first_name}
                    </Link>
                    <h4>Avalable Tomorrow</h4>
                    <p>Tomorrow @ 7 a.m</p>
                </li>   
            </div>
        )
    }
}
