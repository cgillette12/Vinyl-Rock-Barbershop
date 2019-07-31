import React ,{useState, useEffect, useContext} from 'react'

import BarberListContext from '../../Contexts/BarberListContext'
import Barber from '../Barber/Barber'
import BarberApiService from '../../Services/barber-api-service'

export default function BarberList() {
    const [error, setError] = useState(null);
    const context = useContext(BarberListContext)

   useEffect(() => {
        BarberApiService.getAllBarbers()
            .then(res => {
                return context.setBarberList(res)
            })
            .catch(error => {
                setError(error)
            })
    },[])

    const renderBarbers = () =>  {
       
        return context.barberList.map(barber =>
            <Barber
                key={barber.id}
                barber={barber}
            />
            )
    }
        return (
            <div>
                <ul className='BarberList'>
                    {error ? 
                    <p >There was and error,try again later</p>
                    :renderBarbers()}
                </ul>
            </div>
        )
}
