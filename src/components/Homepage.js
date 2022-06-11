import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import CardComponent from './CardComponent'
import useGeoLocation from '../hooks/useGeoLocation'

export default function Homepage(){
    const location = useGeoLocation();
    const Users=[
        {
          name:"Deepak",
          Address:"#123",
          Distance:"3km"
        },
        {
          name:"Yash",
          Address:"#124",
          Distance:"4km"
        },
        {
          name:"Raj",
          Address:"#125",
          Distance:"5km"
        }
    ]

    const elements = Users.map(items=>{ 
        console.log(items.name)
        return(
          <Col className='dashcard my-4'>
            <Card className='card-container-home mx-4' >
                <Card.Body>
                    <Row>
                        <Col className="col-2">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />                    
                        </Col>
                        <Col>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Text>{items.Address} </Card.Text>
                            <Card.Text>{items.Distance} </Card.Text>
                            {/* <Card.Text>Review: 5</Card.Text> */}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
          </Col>
        )
    }) 
    
    return(
        <div>
            {/* <h3>Result for your book : </h3> */}
            {elements}
        </div>
    )
}