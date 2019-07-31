import React, { useState , useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../Contexts/UserContext'
import AuthApiService from '../../Services/auth-api-service'


export default function LoginForm(props) {
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);
    const { onLoginSuccess = () => { } } = props;
    const context = useContext(UserContext);

    const handleSubmitJwtAuth = e => {
        e.preventDefault()

        AuthApiService.postLogin({
            user_name: user_name,
            password: password,
        })
            .then(res => {
                setUser_name('')
                setPassword('')
                context.processLogin(res.authToken)
                onLoginSuccess()
            })
            .catch(res => {
               setError(res.error) 
            })
        }
        return (
            <div>
                <form
                    className='LoginForm'
                    onSubmit={handleSubmitJwtAuth}
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
                        onChange={e => setUser_name(e.target.value)}
                        required
                    />
                    <label className='Password'>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        onChange={e => setPassword(e.target.value)}
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
