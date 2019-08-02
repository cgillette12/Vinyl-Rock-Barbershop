import React, { Component } from 'react'
import AppointmentApiService from '../../Services/appointment-api-service'
import './ProfilePage.css'



export default class ProfilePage extends Component {
    static defaultProps = {
        match: { params: {} }
    }
    state = {
        appointmentList: []
    }

    componentDidMount() {
        AppointmentApiService.getAllAppointments()
            .then(appointment =>
                this.setState({
                    appointmentList: appointment
                }))
    }

    renderProfile() {
        const { appointmentList } = this.state
        return appointmentList.map((appointment , key) => {
            const { time, first_name, type } = appointment
            return <tr key={key}  >
                    <td>{time}</td>
                    <td>{first_name}</td>
                    <td>{type}</td>
                    {/* Cancel button is for extended feature list */}
                    <td><button className='cancel-button'>Cancel</button></td>
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
