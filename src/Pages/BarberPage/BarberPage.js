import React, { Component } from 'react'

import BarberList from '../../Components/BarberList/BarberList'
import './BarberPage.css'

export default class BarberPage extends Component {

    render() {
        return (
            <div className='Barber-container'>
                <div className='Barber-list'>

                    <h1>Pick Your Pro</h1>
                    <p> Only next day appointments</p>
                    <BarberList />
                </div>
            </div>
        )
    }
}
