import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import CardsPage from "../../containers/cardspage/CardsPage";
import {Link, Route, Switch} from "react-router-dom";

class BookMarkNavbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">login</Nav.Link>
                        <Nav.Link as={Link} to="/tiny-url">Tiny Url</Nav.Link>
                    </Nav>
                </Navbar>
                <br/>
                <Switch>
                    <Route path="/" exact component={CardsPage}/>
                    {/*<Route path="/new-post" component={NewPost} />*/}
                </Switch>
            </>
        );
    }
}

export default BookMarkNavbar;