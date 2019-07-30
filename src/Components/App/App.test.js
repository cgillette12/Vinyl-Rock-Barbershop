import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { BarberListProvider } from '../../Contexts/BarberListContext'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <BrowserRouter>
        <BarberListProvider>
          <App />
        </BarberListProvider>
      </BrowserRouter>
      , 
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})