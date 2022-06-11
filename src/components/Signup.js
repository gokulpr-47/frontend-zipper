import {useContext} from 'react'
import {useState} from 'react'
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import {Link} from 'react-router-dom'

export default function Signup(props){
    const history = useHistory();
    const { setIsLoggedIn } = useContext(LoginContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [redirectPath, setRedirectPath] = useState(
        props.location.state ? props.location.state.next : false
    );
    const [redirectText, setRedirectText] = useState(
        props.location.state ? props.location.state.message : false
    );

    const sendData = () => {
        axios({
        method: "POST",
        data: {
            username: username,
            password: password,
            number: number,
            email: email
        },
        withCredentials: true,
        url: "https://fc-24.herokuapp.com/register",
        }).then((res) => {
        if (res.data.loggedIn) {
            setIsLoggedIn(true);
            console.log("user Connected", res.data);
            setRedirectText(false);
            history.push(redirectPath ? redirectPath : "/dashboard");
        }   
         else {
            setRedirectText(res.data.message);  
        }
        });
    };
    return(
        <div className='signup-container'>
            <div className='signup-box'>
                <div>
                    <Container>
                        <div className="signIn_page">
                            <h3>Sign Up</h3>
                            {redirectText ? (
                            <p style={{ marginBottom: "0px", fontWeight: "500" }}>
                                {redirectText}
                            </p>
                            ) : (
                            ""
                            )}
                            <div>
                            <input
                                type="text"
                                id="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                            </div>
                            <div>
                            <input
                                type="email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            </div>
                            <div>
                            <input
                                type="number"
                                id="number"
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Phone number"
                            />
                            </div>
                            <div>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            </div>
                            <Button onClick={sendData}>
                            Sign Up
                            </Button>
                        </div>
                    </Container>
                    <p className='login-direct my-3'>Already have an account? <Link to={`/Login`}>Log In</Link> </p>
                </div>
            </div>
        </div>
    )
}