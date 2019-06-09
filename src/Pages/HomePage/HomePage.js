import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class Homepage extends Component {
    render() {
        return (
            <div className='homePage-container'>
                <section className='title'>
                    <h1>Vinyl Rock <br/> Barbershop</h1>
                    <p>
                        Welcome to Vinyl Rock Barbershop.<br/>
                        Where hair cutting comes easy.<br/>
                        Just log in, Pick your barber , and we'll see you soon!
                    </p>
                    <button className='homePage-button'>
                        <Link to="/Login">
                            Login
                        </Link>
                    </button>
                    <button className='homePage-button'>
                        <Link to="/Register">
                            Register
                        </Link>
                    </button>
                </section>
            </div>
        )
    }
}
