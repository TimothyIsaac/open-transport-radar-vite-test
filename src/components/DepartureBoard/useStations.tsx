import { useEffect, useState } from 'react'
import { getStations } from '../../api/stations'

const useStations = () => {
    const [isLoadingGeoLocation, setLoadingGeoLocation] = useState(false)
    const [isLoadingStations, setLoadingStations] = useState(false)
    const [currentCoords, setCoords] = useState<GeolocationCoordinates>()
    const [nearbyStations, setNearbyStations] = useState<Hafas_Stations.Station[]>([])

    /** Fetching Browser Location **/
    useEffect(() => {
        if ("geolocation" in navigator) {
            setLoadingGeoLocation(true)
            navigator.geolocation.getCurrentPosition(position => {
                console.log("found position,", position.coords)
                setCoords(position.coords)
                /** Get Nearby Stations with found coordinates */
                getStations({ lat: position.coords.latitude, long: position.coords.longitude })
                    .then(stations => {
                        if (stations) setNearbyStations(stations)
                    })
            })
        }
    }, [])

    return {
        nearbyStations: nearbyStations || undefined,

    }
}

export default useStations