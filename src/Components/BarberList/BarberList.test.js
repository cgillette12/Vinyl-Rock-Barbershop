import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BarberList from '../BarberList/BarberList'


it('renders BarberList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <BarberList />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})