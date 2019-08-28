import React, { Component } from 'react'

const AppointmentContext = React.createContext({
  barberInfo: [],
  serviceSelected: '',
  timeSelected: '',
  error: null,
  delete: () => { },
  setError: () => { },
  clearError: () => { },
  setBarberInfo: () => { },
  setSelectTime: () => { },
  setServiceType: () => { }
})
export default AppointmentContext
export  class AppointmentProvider extends Component {
  state = {
    barberInfo: [],
    serviceSelected: '',
    timeSelected: '',
    error: null,
  }
  setBarberInfo = barberInfo => {
    this.setState({ barberInfo })
  }
  setServiceType = serviceSelected => {
    return this.setState({ serviceSelected})
  }
  setSelectTime = timeSelected => {
    return this.setState({ timeSelected})
  }
  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const { barberInfo,
      serviceSelected,
      timeSelected,
      error,
    } = this.state

    const value = {
      barberInfo,
      serviceSelected,
      timeSelected,
      error,
      setBarberInfo: this.setBarberInfo,
      setServiceType: this.setServiceType,
      setTimeSelected : this.setTimeSelected,
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
