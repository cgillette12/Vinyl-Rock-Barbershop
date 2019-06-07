import React, { Component } from 'react'

import BarberApiService from '../../Services/barber-api-service';
import { Link } from 'react-router-dom'
import './Utils.css'

export class ServiceButtons extends Component {
    state = {
        barberServices: [],
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                return this.setState({ barberServices: services })

            })
    }
    handleSelectServiceType = (e, selected) => {
        e.preventDefault()
        this.props.serviceId(selected.id)
    }

    renderServices() {
        return this.state.barberServices.map(barber => {
            return <button
                onClick={(e) => this.handleSelectServiceType(e, barber)}
                key={barber.id} >
                <h3>{barber.type}</h3>
                <p>{barber.price} 45min</p>
            </button>
        })
    }

    render() {
        return (
            <div>
                {this.renderServices()}
            </div>
        )
    }
}


export class TimeButtons extends Component {

    handleSelectTime = (e, selected) => {
        e.preventDefault()
        this.props.timeId(selected)
    }
    renderTimeButtons() {
        let timesArray = ['7:00 a.m',
            '8:00 a.m',
            '9:00 a.m',
            '10:00 a.m',
            '11:00 a.m',
            '12:00 p.m',
            '1:00 p.m',
            '2:00 p.m',
            '3:00 p.m',
            '4:00 p.m',
            '5:00 p.m',
            '6:00 p.m',
            '7:00 p.m']

        return timesArray.map((time, key) => {
            let idNumber;
            for (let i = 1; i <= 12; i++) {
                i += idNumber
            }
            return <button onClick={(e) => this.handleSelectTime(e, time)}
                id={idNumber}
                key={key}>
                <p>{time}</p>
            </button>
        })
    }
    render() {
        return (
            <div>
                {this.renderTimeButtons()}
            </div>
        )
    }
}



export class SideNavButton extends Component {
    state = {
        dropdownToggled: false
    }
    handleDropdownToggle = () => {
      this.setState( prevState => ({
          dropdownToggled: !prevState.dropdownToggled
      }))

    }
    render() {
        return (
            <div className='SideNav-button' onClick={this.handleDropdownToggle}>
                <section className='nav-dropdown-button'>
                <div className='SideNav-button-line' />
                <div className='SideNav-button-line' />
                <div className='SideNav-button-line' />
                {/* <div className='sideNav-dropdown' >
                    <SideNavDrawer />
                </div> */}
                </section>
            </div >
        )
    }
}

export class SideNavDrawer extends Component {
    render() {
        return (
            <nav className='side-drawer'>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Service">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/Barbers">
                            Barbers
                        </Link>
                    </li>
                    <li>
                        <Link to='/Profile'>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={this.handleLogout}
                            to="/">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}



export class backdrop extends Component {
    render() {
        return (
            <div className='backdrop' />
        )
    }
}



export class ServiceList extends Component {
    state = {
        barberServices: [],
    }
    componentDidMount() {
        BarberApiService.getBarberServices()
            .then(services => {
                return this.setState({ barberServices: services })

            })
    }
    renderServices() {
        return this.state.barberServices.map((barber, key) => {
            return <ul key={key}>
                <li id={barber.id} >
                    <p>
                        {barber.type}........{barber.price}
                    </p>
                </li>
            </ul>

        })
    }
    render() {
        return (
            <div>
                {this.renderServices()}
            </div>
        )
    }
}
