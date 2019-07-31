import React , {Component} from 'react'
import { Route, Switch } from 'react-router-dom'

import BarberPage from '../../Pages/BarberPage/BarberPage'
import BarberProfile from '../BarberProfile/BarberProfile'
import Footer from '../../Components/Footer/Footer'
import HomePage from '../../Pages/HomePage/HomePage'
import LoginPage from '../../Pages/LoginPage/LoginPage'
import NavBar from '../NavBar/NavBar'
import ProfilePage from '../../Pages/ProfilePage/ProfilePage'
import RegisterPage from '../../Pages/RegisterPage/RegisterPage'
import ServiceMenuPage from '../../Pages/ServiceMenuPage/ServiceMenuPage'

import NotFoundRoute from '../../Components/NotFoundRoute/NotFoundRoute'
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute'
import './App.css';

export default class App extends Component {
  state = { hasError: false }
  render(){

    return (
      <div className='main-container'>
        <header className='Nav-header'>
          <NavBar />
        </header>
        <main role='main' className='vinyl-main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={HomePage}
              />
            <PrivateRoute
              exact
              path={'/Barbers'}
              component={BarberPage}
              />
            <PrivateRoute 
              exact 
              path='/BarberProfile/:barberid'
              component={BarberProfile}
              />
            <Route
              exact
              path={'/Login'}
              component={LoginPage}
              />
            <PrivateRoute 
              exact 
              path={'/Profile'}
              component={ProfilePage}
              />
            <Route 
              exact         
              path={'/Register'}
              component={RegisterPage}
              />
            <Route
              exact
              path={'/Service'}
              component={ServiceMenuPage}
              />
            <Route
              component={NotFoundRoute}
              />
          </Switch>
        </main>
          <footer >
            <Footer />
          </footer>
      </div>
    )
  }
}
  
  

