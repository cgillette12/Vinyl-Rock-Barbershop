import config from '../config'
import TokenService from './token-service'

const AppointmentApiService = {
    getAllAppointments() {
        return fetch(`${config.API_ENDPOINT}/appointment`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAppointmentbyId(AppointmentId) {
        return fetch(`${config.API_ENDPOINT}/appointment/${AppointmentId}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
     postAppointment(appointment) {
        return fetch(`${config.API_ENDPOINT}/appointment`, {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(appointment)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json())
            
    },
    deleteAppointment(appointmentId) {
        fetch(`${config.API_ENDPOINT}/appointment/${appointmentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json({ message: 'Appointment canceled' })
            )
    }
}
export default AppointmentApiService;