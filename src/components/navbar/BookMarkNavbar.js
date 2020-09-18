import React, {Component} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

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
                            {this.props.isAuthenticated ? <Nav.Link as={Link} to="/">Home</Nav.Link> : null}
                            {this.props.isAuthenticated ? <Nav.Link as={Link} to="/groups">groups</Nav.Link> : null}
                            {!this.props.isAuthenticated ? <Nav.Link as={Link} to="/auth">auth</Nav.Link> : null}
                            {this.props.isAuthenticated ? <Nav.Link as={Link} to="/logout">logout</Nav.Link> : null}
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

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default withRouter(connect(mapStateToProps)(BookMarkNavbar));