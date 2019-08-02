import React, { Component } from 'react'
import DemoCreds from '../../Components/DemoCreds/DemoCreds'
import TokenService from '../../Services/token-service'
import { Link, Redirect } from 'react-router-dom'

export default class Landingpage extends Component {
  

  render() {
    return (
      <div className='homePage-container'>
        {TokenService.hasAuthToken() ? <Redirect to="/HomePage" /> : <></>}
        <section className='title'>
          <h1>Vinyl Rock <br /> Barbershop</h1>
          <h3> Welcome to Vinyl Rock Barbershop.</h3>
          <p>
            Where hair cutting comes easy
                        Vinyl Rock is all about taking the hassle out of getting your hair cut!<br />
            Once logged in you'll be able to select from one of our barbers!
            Just select the name of the barber, pick your Service and Time, then check your profile.
            Your apointment will be updated! So Login or Sign up and never have to worry about your hair again!!!
                    </p>
          <div className='homePagebutton-container'>
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
            <button className='homePage-button'>
              <DemoCreds />
            </button>
          </div>
        </section>
      </div>
    )
  }
}
