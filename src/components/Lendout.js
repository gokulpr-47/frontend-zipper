import React from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import {Container, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";

export default function Lendout(props){
    const history = useHistory();
    const { setIsLoggedIn } = useContext(LoginContext);
    const [bookName, setBookName] = React.useState();
    const [isbn, setIsbn] = React.useState();
    const [genre, setGenre] = React.useState();
    const [mrp, setMrp] = React.useState();
    const [redirectPath, setRedirectPath] = useState(
        props.location.state ? props.location.state.next : false
    );
    const [redirectText, setRedirectText] = useState(
        props.location.state ? props.location.state.message : false
    );


    const sendData = () =>{
        axios({
        method: "POST",
        data: {
            bookname: bookName,
            isbn: isbn,
            genre: genre,
            mrp: mrp,
            location: JSON.stringify(props.location)
        },
        withCredentials: true,
        url: "https://fc-24.herokuapp.com/register",
        }).then((res) => {
        if (res.data.loggedIn) {
            setIsLoggedIn(true);
            console.log("user Connected", res.data);
            setRedirectText(false);
            history.push(redirectPath ? redirectPath : "/");
        }   
         else {
            setRedirectText(res.data.message);  
        }
        });
    }

    return(
        <div className="lendout-form">
            <div className="lendout-container">
                <Container>
                    <div className="lendout-page">
                        <h3>Lend out a book</h3>
                        {/* {redirectText ? (
                        <p style={{ marginBottom: "0px", fontWeight: "500" }}>
                            {redirectText}
                        </p>
                        ) : (
                        ""
                        )} */}
                        <div>
                        <label htmlFor="bookname">Book's name: </label>
                        <input
                            type="text"
                            id="bookname"
                            onChange={(e) => setBookName(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="isbn">ISBN:</label>
                        <input
                            type="number"
                            id="isbn"
                            onChange={(e) => setIsbn(e.target.value)}
                        />
                        </div>
                        <div>
                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                id="genre"
                                onChange={(e) => setIsbn(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="number">MRP:</label>
                            <input
                                type="number"
                                id="mrp"
                                onChange={(e) => setIsbn(e.target.value)}
                            />
                        </div>
                        <Button variant="outline-success" onClick={sendData}>
                        Upload
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}