import React, { Component } from 'react'

const AppointmentContext = React.createContext({
  barberInfo: [],
  serviceSelected: '',
  timeSelected: '',
  error: null,
  setError: () => { },
  clearError: () => { },
  setBarberList: () => { }
})
export default AppointmentContext
export  class AppointmentProvider extends Component {
  state = {
    barberInfo: [],
    error: null,
  }
  setBarberInfo = barberInfo => {
    this.setState({ barberInfo })
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const { BarberInfo,
      error,
    } = this.state

    const value = {
      BarberInfo,
      error,
      setBarberInfo: this.setBarberInfo,
      setError: this.setError,
      clearError: this.clearError
    }
    return (
      <AppointmentContext.Provider value={value}>
        {this.props.children}
      </AppointmentContext.Provider>
    )
  }
}
