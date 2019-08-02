import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './LoginPage.css'

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/HomePage'
        history.push(destination)
    }
    render() {
        return (
            <div className='loginPage'>
                <section className='login-section'>
                    <h1>Login</h1>
                    <LoginForm onLoginSuccess={this.handleLoginSuccess} />
                </section>

            </div>
        )
    }
}
