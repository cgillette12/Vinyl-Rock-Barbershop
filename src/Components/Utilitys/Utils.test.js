import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ServiceButtons, 
         TimeButtons, 
         SideNavButton, 
         SideNavDrawer,
         Backdrop ,
         ServiceList } from '../Utilitys/Utils'


it('renders Utils without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ServiceButtons/>
      <TimeButtons/>
      <SideNavButton/>
      <SideNavDrawer/>
      <Backdrop/>
      <ServiceList/>
    </BrowserRouter>, div)
  ReactDOM.unmountComponentAtNode(div)
})