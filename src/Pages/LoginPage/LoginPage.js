import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './LoginPage.css'

export default function LoginPage(props) {
    

    const handleLoginSuccess = () => {
        const { location = {}, history = { push: () => { } } } = props;
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }
  
        return (
            <div className='loginPage'>
            {TokenService.hasAuthToken() ? <Redirect to="/" /> : <></> }
                <section className='login-section'>
                <h2>Login</h2>
                <LoginForm onLoginSuccess = {handleLoginSuccess}/>
                </section>
            
            </div>
        )
    };
