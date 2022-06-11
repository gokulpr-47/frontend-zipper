import React from 'react'

export default function LandingPage(props){
    return(
        <div className='landing-container'>
            <div className="landing-box">
                <p>Please click the allow button to allow permission to get your location</p>
                <button onClick={props.onStart}>OK</button>
            </div>
        </div>
    )
}