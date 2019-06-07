import React, { Component } from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import './RegisterPage.css'

export default class Register extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }
    render() {
        return (
            <div className='registerPage'>
                <section className='registation-section'>
                <h3> Register </h3>
                <RegisterForm
                  onRegistrationSuccess = {this.handleRegistrationSuccess}
                />
                </section>
            </div>
        )
    }
}
