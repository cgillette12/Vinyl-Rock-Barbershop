import React from 'react'
import { Link } from 'react-router-dom'

export default function Barber(props){

    
        const { barber } = props
        return (
            <div className='Barber-wrapper'>
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
