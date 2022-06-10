import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function CardComponent(){

    const items = [
        <Card className='card-container mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
                <Card.Title>Kite Runner</Card.Title>
                <Card.Text>-Khaled Hossieni </Card.Text>
                <Card.Text>Review: 5</Card.Text>
            </Card.Body>
        </Card>,
        <Card className='card-container mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
                <Card.Title>Kite Runner</Card.Title>
                <Card.Text>-Khaled Hossieni </Card.Text>
                <Card.Text>Review: 5</Card.Text>
            </Card.Body>
        </Card>,
        <Card className='card-container mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
                <Card.Title>Kite Runner</Card.Title>
                <Card.Text>-Khaled Hossieni </Card.Text>
                <Card.Text>Review: 5</Card.Text>
            </Card.Body>
        </Card>,
        <Card className='card-container mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
                <Card.Title>Kite Runner</Card.Title>
                <Card.Text>-Khaled Hossieni </Card.Text>
                <Card.Text>Review: 5</Card.Text>
            </Card.Body>
        </Card>,
        <Card className='card-container mx-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1547555999-14e818e09e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Card.Body>
                <Card.Title>Kite Runner</Card.Title>
                <Card.Text>-Khaled Hossieni </Card.Text>
                <Card.Text>Review: 5</Card.Text>
            </Card.Body>
        </Card>
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: 2000,
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            {items}
        </Slider>
    );
}