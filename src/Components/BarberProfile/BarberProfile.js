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
        match: { params: {} },
        location: {},
        history: {
            push: () => { },
        },
    }
    componentDidMount() {
        const { barberid } = this.props.match.params
        BarberApiService.getBarber(barberid)
            .then(data => {
                return this.setState({ barberInfo: data })
            })
    }
    handleAppointmentSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/Profile'
        history.push(destination)
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
        .then(()=>{
            this.handleAppointmentSuccess()
        })
        .catch(error =>{
            console.error(error)
            return { hasError: true }
        })
        
            
        }
        

    render() {
        const { first_name } = this.state.barberInfo
        return (
            <div className='profile-container'>
                {this.state.hasError && <p className='red'>There was an error!</p>}
            <section className='profile-section'onSubmit={this.handleSelectedServices}>
                <h1>{first_name}</h1>
                <form className='service-time-list'
                ><div className='service-list'>
                        <label>Choose your Service</label>
                        <input>
                        <ServiceButtons name='services' serviceId={this.handleServiceType} />
                        </input>
                    </div>
                    <div className='time-list'>
                        <label>Pick Time</label>
                        <TimeButtons name='time' timeId={this.handleSelectTime} />
                    </div>
                <button  className='submit-haircut' type='submit'>Review/Book</button>
                </form>
                </section>
            </div>
        )
    }
}
