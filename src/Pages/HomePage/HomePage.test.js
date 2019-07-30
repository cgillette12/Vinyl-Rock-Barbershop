import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'


it('renders HomePage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})