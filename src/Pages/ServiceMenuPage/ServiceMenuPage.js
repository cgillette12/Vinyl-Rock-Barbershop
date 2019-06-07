import React, { Component } from 'react'
import { ServiceList } from '../../Components/Utilitys/Utils'
import './ServiceMenuPage.css'

export default class ServiceMenuPage extends Component {
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
