import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'

export default class RegisterForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    state = { error: null }

    handleNewUserSubmit = e => {
        e.preventDefault()
        const { user_name,
            first_name,
            last_name,
            email,
            phone_number,
            password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            phone_number: phone_number.value,
            password: password.value
        })
            .then(user => {
                user_name.value = ''
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                phone_number.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })


    }
    render() {
        const { error } = this.state
        return (
            <div>
                <div>
                    <form
                        className='RegisterForm'
                        onSubmit={this.handleNewUserSubmit}
                    >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <label className='First-Name-form'>
                            First Name*
                        </label>
                        <input
                            type='text'
                            placeholder='First'
                            name='first_name'
                            required

                        />
                        <label className='Last-Name-form'>
                            Last Name*
                        </label>
                        <input
                            type='text'
                            placeholder='Last'
                            name='last_name'
                            required

                        />
                        <label className='userName-form'>
                            User Name*
                        </label>
                        <input
                            type='text'
                            placeholder='First_Last...'
                            name='user_name'
                            required
                        />
                        <label className='Password-form'>
                            Password* Uppercase # and one Special !#$%*
                        </label>
                        <input
                            type='password'
                            name='password'
                            required
                        />
                        <label className='phone_number-form'>
                            Phone Number* 123-123-1234
                        </label>
                        <input
                            type='tel'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder='XXX-XXX-XXXX'
                            name='phone_number'
                            required
                        />
                        <label className='email-form'>
                            Email*
                        </label>
                        <input
                            type='email'
                            placeholder='First@gmail.com'
                            name='email'
                            required
                        />
                        <button type='submit'>
                            Register
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}
