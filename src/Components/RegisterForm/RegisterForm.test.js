import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RegisterForm from '../RegisterForm/RegisterForm'


it('renders RegisterForm without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RegisterForm />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})