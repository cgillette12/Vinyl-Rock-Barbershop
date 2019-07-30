import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import  Barber from '../Barber/Barber'



it('renders Barber without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Barber  barber={{barber:{}}}/>
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})
