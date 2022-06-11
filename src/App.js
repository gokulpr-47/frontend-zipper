import React, { useState } from 'react'
import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Lendout from './components/Lendout'
import { LoginContext } from './contexts/LoginContext';
import useIsLoggedIn from './isloggedin'
import LandingPage from './components/LandingPage'
import useGeoLocation from './hooks/useGeoLocation'
import CardDetail from './components/CardDetail'
// import NavbarComp from './components/NavbarComp'

export default function App(){
    const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn("isLoggedIn",false);
    const [user, setUser] = useState()
    const [username, setUsername] = React.useState("John Doe");
    const [quiz, setQuiz] = React.useState(false)
    const location = useGeoLocation();
    
    function startQuiz(){
        setQuiz(!quiz);
    }

    return(
        <BrowserRouter>
            {location.error && <LandingPage onStart={()=>startQuiz()}/>}
            <LoginContext.Provider value= {{setIsLoggedIn, isLoggedIn, setUser,user}}>
                <NavbarComp/>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/signup" exact component={Signup}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path='/dashboard' exact component={() => <Dashboard name={username}/>}/>
                        <Route path='/lendout' exact component={() => <Lendout location={location}/>}/>
                        <Route path='/cardDetail' exact component={CardDetail} />
                    </Switch>
                <Footer/>
            </LoginContext.Provider>
        </BrowserRouter>
    )
}
