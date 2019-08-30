import React, { Component } from 'react'

import BarberListContext from '../../Contexts/BarberListContext'
import Barber from '../Barber/Barber'
import BarberApiService from '../../Services/barber-api-service'
import { Spinner } from '../../Components/Utilitys/Utils'

export default class BarberList extends Component {
    static contextType = BarberListContext
    state = {
        error: null,
        loader: true
    }
    componentDidMount() {
        BarberApiService.getAllBarbers()
            .then(data => {
                this.context.setBarberList(data)
                this.setState({
                    loader: false
                })
            })
            .catch(err => {
                this.context.setError(err)
                this.wait()
            })
    }
    sleep = milliseconds => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    wait = async (milliseconds = 2000) => {
        await this.sleep(milliseconds);
    };
    renderBarbers() {
        const { barberList = [] } = this.context
        return barberList.map(barber =>
            <Barber
                key={barber.id}
                barber={barber}
            />
        )
    }
    render() {
        const { error } = this.context
        return (
            <div>
                {this.state.loader ? <Spinner /> : <ul className='BarberList'>
                    {error ?
                        <p >There was and error,try again later</p>
                        : this.renderBarbers()}
                </ul>}
            </div>
        )
    }
}
