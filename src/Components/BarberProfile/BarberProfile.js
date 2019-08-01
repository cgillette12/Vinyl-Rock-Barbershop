import React, { Component } from 'react'

import AppointmentApiService from '../../Services/appointment-api-service'
import BarberApiService from '../../Services/barber-api-service'


import { TimeButtons, ServiceButtons } from '../Utilitys/Utils'
import './BarberProfile.css'

export default class BarberProfile extends Component {
    state = {
        barberInfo: [],
        serviceSelected: '',
        timeSelected: '',
        hasError: false
    }
    static defaultProps = {
        match: { params: {} }
    }
    componentDidMount() {
        const { barberid } = this.props.match.params
        BarberApiService.getBarber(barberid)
            .then(data => {
                return this.setState({ barberInfo: data })
            })
    }

    handleServiceType = ev => {
        return this.setState({ serviceSelected: ev })
    }
    handleSelectTime = ev => {
        return this.setState({ timeSelected: ev })
    }

    handleSelectedServices = ev => {
        ev.preventDefault();

        const { timeSelected, serviceSelected } = this.state
        const { id } = this.state.barberInfo
        
        const newAppointment = {
            time: timeSelected,
            services_id: serviceSelected,
            barber_id: id
        }
        AppointmentApiService.postAppointment(newAppointment)
        
            
        }
        

    render() {
        const { first_name } = this.state.barberInfo
        return (
            <div className='profile-container'>
            <section className='profile-section'>
                <h1>{first_name}</h1>
                <form className='service-time-list'
                    onSubmit={this.handleSelectedServices}
                ><div className='service-list'>
                        <h2>Choose your Service</h2>
                        <ServiceButtons name='services' serviceId={this.handleServiceType} />
                    </div>
                    <div className='time-list'>
                        <h2>Pick Time</h2>
                        <TimeButtons name='time' timeId={this.handleSelectTime} />
                    </div>
                </form>
                <button  className='submit-haircut' type='submit'>Review/Book</button>
                </section>
            </div>
        )
    }
}
