import React, { Component } from 'react'
import AppointmentApiService from '../../Services/appointment-api-service'
import AppointmentContext from '../../Contexts/AppointmentContext'
import './ProfilePage.css'



export default class ProfilePage extends Component {
    static defaultProps = {
        match: { params: {} }
    }
    state = {
        appointmentList: [],
        error: null

    }
    static contextType = AppointmentContext
    componentDidMount() {
        AppointmentApiService.getAllAppointments()
            .then(appointment =>
                this.setState({
                    appointmentList: appointment
                }))
    }
    handleDeleteAppointment = (id) => {
        this.setState({
            appointmentList: this.state.appointmentList.filter(appointment => appointment.id !== id)

        })
        AppointmentApiService.deleteAppointment(id)
            .then( () =>{
                this.setState({
                    appointmentList: this.state.appointmentList.filter(appointment => appointment.id !== id)

                })
                this.context.delete()
            })
            .catch(error => {
                this.setState({
                    error: error
                })
            })
    }
    renderProfile() {
        const { appointmentList } = this.state
        return appointmentList.map((appointment, key) => {
            const { id, time, first_name, type } = appointment
            return <tr key={key} id={id} >
                <td>{time}</td>
                <td>{first_name}</td>
                <td>{type}</td>
                {/* Cancel button is for extended feature list */}
                <td onClick={e => this.handleDeleteAppointment(id)}><button
                    className='cancel-button'
                    >Cancel
                        </button>
                </td>
            </tr>
        })

    }

    render() {
        return (
            <div className='profile-container'>
                <section className='user-profile-section'>
                    <h1>My Profile</h1>
                    <h2>Appointments</h2>
                    <table className='user-Table'>
                        <tbody>
                            <tr>
                                <th>Time</th>
                                <th>Barber</th>
                                <th>Service</th>
                            </tr>
                            {this.renderProfile()}
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}
