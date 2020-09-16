import React, {Component} from 'react';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import BookMarkNavbar from "./components/navbar/BookMarkNavbar";
import Auth from './containers/Auth/Auth';
import GroupsPage from "./containers/group/GroupsPage";
import CreateGroup from "./containers/group/group/CreateGroup";
import TestComponent from "./components/TestComponent";
import TestComponent2 from "./components/TestComponent2";
import CreateCard from "./containers/card/CreateCard/CreateCard";
import UpdateCard from "./containers/card/CreateCard/UpdateCard";
import CardsPage from "./containers/cardspage/CardsPage";
import Logout from "./containers/Auth/logout/Logout";
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
import AddRemoveAdmin from "./containers/admin/AddRemoveAdmin";
import LandingPage from "./containers/landing/LandingPage";


class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        library.add(faCheckSquare, faCoffee);
        return (

            <div className="container">


                <BookMarkNavbar/>

                <Switch>
                    <Route path="/groups/new" component={CreateGroup}/>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/groups" exact component={GroupsPage}/>
                    <Route path="/test" exact component={TestComponent}/>
                    <Route path="/card-create/:groupId" exact component={CreateCard}/>
                    <Route path="/groups/:id" exact component={TestComponent2}/>
                    <Route path="/card-update/:groupId/:cardId" component={UpdateCard}/>
                    <Route path="/cards-page/:groupId" component={CardsPage}/>
                    <Route path="/add-remove-admin" component={AddRemoveAdmin}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact component={LandingPage}/>}
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
