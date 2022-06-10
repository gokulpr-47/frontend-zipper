import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <div className='footer container-fluid'>
            <Row className="footer-row">
                <Col className="col-6 ps-3">
                    <div className='website-details'>
                        <p>8/a, Sindubaug Colony, Tilak Rd, Ghatkopar (e), Mumbai - 400077.</p>
                        <p><FontAwesomeIcon icon={faPhone}/> : 02225134510</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> : info@gmail.com</p>
                    </div>
                </Col>
                <Col className="col-6 social-column">
                    <div className="social-medias">
                        <h2>Connect on Social Media</h2>
                        <div className="platforms">
                            <FontAwesomeIcon className="icons" icon={faInstagram} />
                            <FontAwesomeIcon className="icons" icon={faFacebook} />
                            <FontAwesomeIcon className="icons" icon={faTwitter} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="web-name">
                    <h3>ZIPPER.</h3>
                </Col>
            </Row>
        </div>
    )
}