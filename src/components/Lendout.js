import React from 'react'

export default function Lendout(){
    const [bookName, setBookName] = React.useState();
    const [isbn, setIsbn] = React.useState();
    const [genre, setGenre] = React.useState();

    return(
        <div className="lendout-form">
            <div className="lendout-container">
                <Container>
                    <div className="signIn_page">
                        <h3>Lend out a book</h3>
                        {redirectText ? (
                        <p style={{ marginBottom: "0px", fontWeight: "500" }}>
                            {redirectText}
                        </p>
                        ) : (
                        ""
                        )}
                        <div>
                        <label htmlFor="username">Book's name: </label>
                        <input
                            type="text"
                            id="bookname"
                            onChange={(e) => setBookName(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="number">ISBN</label>
                        <input
                            type="number"
                            id="password"
                            onChange={(e) => setIsbn(e.target.value)}
                        />
                        </div>
                        <Button variant="outline-success" onClick={sendData}>
                        Sign In
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}