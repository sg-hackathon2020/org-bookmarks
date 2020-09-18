import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

/*                    <Route path="/groups" exact component={GroupsPage}/>
*/
class BookMarkNavbar extends Component {
    render() {
        return (
            <>
                <div className="container mb-2 pb-2">
                    <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/groups">groups</Nav.Link>
                            <Nav.Link as={Link} to="/tiny-url">Tiny Url</Nav.Link>
                        </Nav>
                    </Navbar>
                    <br/>
                    {/*<Switch>
                        <Route path="/" exact component={CardsPage}/>
                        <Route path="/groups" exact component={GroupsPage}/>
                        <Route path="/new-post" component={NewPost} />
                    </Switch>*/}
                </div>
            </>
        );
    }
}

export default BookMarkNavbar;