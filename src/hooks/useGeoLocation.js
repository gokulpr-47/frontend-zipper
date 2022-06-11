import React, { useEffect } from 'react'

export default function useGeoLocation(){
    const [location, setLocation] = React.useState({
        coordinate: {lat: "", lng: ""},
        loaded: false,
        error: true
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            },
            error:false
        })
    }

    const onError = error => {
        setLocation({   
            loaded: true,
            error
        })
    }

    useEffect(() => {
        if(!("geolecation" in navigator)){
            onError({
                error:{
                    code: 0,
                    message: "Geolocation not supported",
                },
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[]);
    return location;
}