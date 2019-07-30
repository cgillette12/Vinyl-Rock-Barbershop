import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BarberPage from '../BarberPage/BarberPage'


it('renders BarberPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BarberPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})