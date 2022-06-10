import React from 'react'
import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Lendout from './components/Lendout'
// import NavbarComp from './components/NavbarComp'

export default function App(){
    const [username, setUsername] = React.useState("John Doe");
    // const []
    return(
        <BrowserRouter>
            <NavbarComp/>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path='/dashboard' exact component={() => <Dashboard name={username}/>}/>
                    {/* <Route path='/lendout' exact component={Lendout}/> */}
                </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
