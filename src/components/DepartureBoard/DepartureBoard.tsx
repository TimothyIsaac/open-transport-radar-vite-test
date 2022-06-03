import React, { useEffect } from 'react'
import useStations from './useStations'

function DepartureBoard() {

    const { nearbyStations } = useStations()

    return (
        <div>DepartureBoard
            <ul>

                {nearbyStations.map(station => <li>{station.name}, {station.distance}m</li>)}
            </ul>
        </div>
    )
}

export default DepartureBoard