import React from 'react'
import {Row, Col} from 'react-bootstrap'
import CardComponent from './CardComponent'
import useGeoLocation from '../hooks/useGeoLocation'

export default function Homepage(){
    const location = useGeoLocation();
    
    return(
        <div>
            
        </div>
    )
}