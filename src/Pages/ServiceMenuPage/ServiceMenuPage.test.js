import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ServiceMenuPage from '../ServiceMenuPage/ServiceMenuPage'


it('renders ServiceMenuPage without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ServiceMenuPage />
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})