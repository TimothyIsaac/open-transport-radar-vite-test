import React, { useEffect } from 'react'
import DepartureStation from './DepartureStation'
import useStations from './useStations'

function DepartureBoard() {

    const { nearbyStations } = useStations()

    return (
        <div>DepartureBoard
           
                {nearbyStations.map(station => <DepartureStation station={station} />)}
          
        </div>
    )
}

export default DepartureBoard