import React ,{useEffect, useContext} from 'react'

import BarberListContext from '../../Contexts/BarberListContext'
import Barber from '../Barber/Barber'
import BarberApiService from '../../Services/barber-api-service'

export default function BarberList() {
    const context= useContext(BarberListContext)

   useEffect(() => {
        BarberApiService.getAllBarbers()
            .then(context.setBarberList)
            .catch(context.setError)
    },[])

    const renderBarbers = () =>  {
        const { barberList = [] } = this.context
        return barberList.map(barber =>
            <Barber
                key={barber.id}
                barber={barber}
            />
            )
    }
        const { error } = context.error
        return (
            <div>
                <ul className='BarberList'>
                    {error ? 
                    <p >There was and error,try again later</p>
                    :renderBarbers}
                </ul>
            </div>
        )
}
