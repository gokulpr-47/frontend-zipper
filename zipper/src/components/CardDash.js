import React from 'react'
import {Card, Col, Row} from 'react-bootstrap'

export default function(){
    const Users=[
        {
          name:"Deepak",
          rollNo:"123"
        },
        {
          name:"Yash",
          rollNo:"124"
        },
        {
          name:"Raj",
          rollNo:"125"
        },{
          name:"Rohan",
          rollNo:"126"
        },
        {
          name:"Puneet",
          rollNo:"127"
       
        },
        {
          name:"Vivek",
          rollNo:"128"
        },
        {
          name:"Aman",
          rollNo:"129"
        },
    ]

    const elements = Users.map(items=>{
        console.log(items.name)
        return(
          <Col className='dashcard'>
            <Card className='card-container mx-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>{items.rollNo} </Card.Text>
                    <Card.Text>Review: 5</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        )
    })
    return(
        <Row>
            {elements}
        </Row>
        // <p>hello worldd</p>
    )
}