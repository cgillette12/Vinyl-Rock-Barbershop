import React, { useContext } from 'react'
import AuthApiService from '../../Services/auth-api-service'
import UserContext from '../../Contexts/UserContext'

export default function DemoCreds(props) {
  const userContext = useContext(UserContext)

  const handleDemoLoginSuccess = () => {
    const { location = {}, history = { push: () => { } } } = props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  const handleDemoLogin = () => {
    return AuthApiService.postLogin({
      user_name: 'demo',
      password: 'pass1'
    })
      .then(res => {
        userContext.processLogin(res.authToken)
        handleDemoLoginSuccess()
      })
      .catch(res => {
        userContext.setError(res.error)
      })
  }

  return (
    <button className="link-button" onClick={handleDemoLogin}>
      Demo
    </button>
  )
}