import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { BarberListProvider } from './Contexts/BarberListContext'
import { UserProvider } from './Contexts/UserContext'
import App from './Components/App/App';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <BarberListProvider>
                <App />
            </BarberListProvider>
        </UserProvider>
    </BrowserRouter>
    , document.getElementById('root'));
