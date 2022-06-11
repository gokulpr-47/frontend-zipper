import {useEffect, useState} from 'react'
import { Row, Col, Button, Tab, Tabs } from 'react-bootstrap'
import CardComponent from './CardComponent'
import CardDash from './CardDash'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Dashboard(props){
    let [user, setUser] = useState();
    useEffect(()=>{
        axios({
            method: "GET",
            withCredentials: true,
            url:"https://fc-24.herokuapp.com/dashboard"
        }).then((res)=>{
            setUser(res.data.user);
        })
    }, [])

    console.log(props)
    return(
        <div>
        {user ? (
        <div>
            <section className="user-display">
                <Row className='w-100 mx-0 my-4'>
                    <Col className='username'>
                        <h3>Hello {props.name}!!</h3>
                    </Col>
                    <Col className='d-flex justify-content-end lend-button'>
                        <Link to="/Lendout"><Button>lend new +</Button></Link>
                    </Col>
                </Row>
            </section>
            <section className='count-section'>
                <div className='count-container'>
                    <div className='counts-column'>
                        <Row>
                            <Col className='borrowed-count my-2'>
                                <p>No. of borrowed count: <br /> user.borrowedList.length</p>
                            </Col>
                            <Col className='lended-count my-2'>
                                <p>No. of lended count: <br/> user.lendingbooklist.length</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className="history mb-5">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-5 justify-content-center">
                    <Tab eventKey="home" title="Borrowed">
                        <CardDash />
                    </Tab>
                    <Tab eventKey="profile" title="Lent">
                        <CardDash />
                    </Tab>
                </Tabs>
            </section>  
        </div>
        ):(
            <div className="notlogged">
                <h1>you need to be logged in</h1>
            </div>
        )}
        </div>
    )
}