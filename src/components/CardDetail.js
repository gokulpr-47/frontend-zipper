import React from 'react'
import {Row, Col} from 'react-bootstrap'
import logo from '../static/img/undraw_bibliophile_re_xarc.svg'

export default function CardDetail(){
    return(
        <div className='card-detail'>
            <Row className='card-detail-row'>
                <Col className='card-detail-image'>
                    <img src={logo} alt="" />
                </Col>
                <Col>
                    <h3>The Kite Runner</h3>
                    <p>-Khaled Hossieni</p>
                </Col>
            </Row>
            <div className='book-detail'>
                <h3>About the book:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sapien in orci fringilla fringilla sit amet eu justo. 
                    Aenean vehicula bibendum luctus. Ut iaculis nisl quis elit scelerisque, at vestibulum enim tincidunt. Donec eros elit, 
                    imperdiet non aliquet ac, bibendum nec mauris. Maecenas malesuada odio nec tortor porttitor, vehicula venenatis nibh elementum.
                    In in enim interdum, ullamcorper nisl at, aliquet erat. Maecenas orci tortor, pretium eu magna ac, placerat porta ligula. 
                    Nunc risus turpis, malesuada non tempus vel, convallis non nulla. Nam et tincidunt urna. Integer sit amet dui sem.</p>
            </div>
        </div>
    )
}