import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegisterPage from '../RegisterPage/RegisterPage'


it('renders RegisterPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})