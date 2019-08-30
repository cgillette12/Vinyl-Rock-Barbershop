import React, { Component } from 'react'
import { ServiceList } from '../../Components/Utilitys/Utils'
import './ServiceMenuPage.css'

export default class ServiceMenuPage extends Component {
    state={
        loader:true
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    render() {
        return (
            <div className='ServiceMenu-container'>
                <section className='Service-menu-list'>
                <h1> Service Menu </h1>
                <ServiceList/>
                </section>
            </div>
        )
    }
}
