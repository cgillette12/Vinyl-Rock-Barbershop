import React, { useState, useEffect, useContext } from 'react'

import AppointmentContext from '../../Contexts/AppointmentContext'
import AppointmentApiService from '../../Services/appointment-api-service'
import BarberApiService from '../../Services/barber-api-service'


import { TimeButtons, ServiceButtons } from '../Utilitys/Utils'
import './BarberProfile.css'

export default function BarberProfile(props) {

    const [barberInfo, setBarberInfo] = useState([]);
    const [serviceSelected, setServiceSelected] = useState('');
    const [timeSelected, setTimeSelected] = useState('');
    const [error, setError] = useState(null);
    const context = useContext(AppointmentContext);

   
useEffect(()=>  {
    const { barberid } = props.match.params
    BarberApiService.getBarber(barberid)
        .then(data => {
            console.log(data)
             setBarberInfo(data) 
             context.setBarberInfo(data)
        })
        .catch(error => {
            setError(error)
        })
},[])

const handleServiceType = ev => {
    return setServiceSelected(ev)
}
const handleSelectTime = ev => {
    return setTimeSelected(ev)
}

 const handleSelectedServices = ev => {
    ev.preventDefault();

    
    const { id } = barberInfo.id

    const newAppointment = {
        time: timeSelected,
        services_id: serviceSelected,
        barber_id: id
    }
    AppointmentApiService.postAppointment(newAppointment)


}

    const { first_name } = barberInfo
    return (
        <div className='profile-container'>
            <section className='profile-section'>
                <h1>{first_name}</h1>
                <form className='service-time-list'
                    onSubmit={ev => handleSelectedServices(ev)}
                ><div className='service-list'>
                        <h2>Choose your Service</h2>
                        <ServiceButtons name='services' serviceId={ev => handleServiceType(ev)} />
                    </div>
                    <div className='time-list'>
                        <h2>Pick Time</h2>
                        <TimeButtons name='time' timeId={ev => handleSelectTime(ev)} />
                    </div>
                    <button className='submit-haircut' type='submit'>Review/Book</button>
                </form>
            </section>
        </div>
    )
}

