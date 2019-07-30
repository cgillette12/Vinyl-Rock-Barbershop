import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BarberProfile from '../BarberProfile/BarberProfile'


it('renders BarberProfile without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BarberProfile />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})