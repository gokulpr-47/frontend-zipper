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
// import NavbarComp from './components/NavbarComp'

export default function App(){
    const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn("isLoggedIn",false);
    const [user, setUser] = useState()
    const [username, setUsername] = React.useState("John Doe");
    // const []
    return(
        <BrowserRouter>
            <LoginContext.Provider value= {{setIsLoggedIn, isLoggedIn, setUser,user}}>
                <NavbarComp/>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/signup" exact component={Signup}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path='/dashboard' exact component={() => <Dashboard name={username}/>}/>
                        {/* <Route path='/lendout' exact component={Lendout}/> */}
                    </Switch>
                <Footer/>
            </LoginContext.Provider>
        </BrowserRouter>
    )
}
