import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'


export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    state = { error: null }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = e.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }
    render() {
        const { error } = this.state
        return (
            <div>
                <form
                    className='LoginForm'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <label className='userName'>
                        User Name
                    </label>
                    <input
                        type='text'
                        placeholder='Cody_Gill...'
                        name='user_name'
                        required
                    />
                    <label className='Password'>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        required
                    />
                    <div className='submit-login-section'>
                        <Link to='/Register'>
                            Register
                        </Link>
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
