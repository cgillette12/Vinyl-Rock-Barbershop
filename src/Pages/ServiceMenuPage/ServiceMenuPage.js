import React, { Component } from 'react'
import BarberApiService from '../../Services/barber-api-service'
import { ServiceList } from '../../Components/Utilitys/Utils'
import './ServiceMenuPage.css'

export default class ServiceMenuPage extends Component {
    state={
        barberServices: [],
        error: null,
        loader:true
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                return this.setState({
                    barberServices: services,
                    loader: false
                })

            })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    render() {
        const {barberServices,loader} = this.state
        return (
            <div className='ServiceMenu-container'>
                <section className='Service-menu-list'>
                <h1> Service Menu </h1>
                <ServiceList 
                    barberServices={barberServices} 
                    loader={loader}/>
                </section>
            </div>
        )
    }
}
