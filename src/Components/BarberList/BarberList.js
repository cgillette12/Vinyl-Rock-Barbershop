import React, { Component } from 'react'

import BarberListContext from '../../Contexts/BarberListContext'
import Barber from '../Barber/Barber'
import BarberApiService from '../../Services/barber-api-service'

export default class BarberList extends Component {
    static contextType = BarberListContext

    componentDidMount() {
        BarberApiService.getAllBarbers()
            .then(this.context.setBarberList)
            .catch(this.context.setError)
    }

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
                <ul className='BarberList'>
                    {error ?
                        <p >There was and error,try again later</p>
                        : this.renderBarbers()}
                </ul>
            </div>
        )
    }
}
