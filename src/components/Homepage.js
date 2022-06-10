import React from 'react'
import {Row, Col} from 'react-bootstrap'
import CardComponent from './CardComponent'
import useGeoLocation from '../hooks/useGeoLocation'

export default function Homepage(){
    const location = useGeoLocation();
    
    return(
        <div>
            <section>
                <Row className='landing-section mx-0'>
                    <Col className='landing-brand-name'>
                        <h1>Zipper</h1>
                    </Col>
                    <Col className='landing-brand desc'>
                        <p>Catch line about the website.</p>
                    </Col>
                </Row>
            </section>
            <section>
                <p>Featured Books:</p>                
                <CardComponent/>
            </section>
            {
                location.loaded? JSON.stringify(location):"location data not available yet"
            }
        </div>
    )
}