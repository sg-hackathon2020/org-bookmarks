import React from 'react';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {Route, Switch} from 'react-router-dom';
import {faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import CardsPage from "./containers/cardspage/CardsPage";
import {BrowserRouter} from "react-router-dom";
import BookMarkNavbar from "./components/navbar/BookMarkNavbar";
import LoginForm from "./containers/login/LoginForm";
import Auth from './containers/Auth/Auth';
import GroupsPage from "./containers/group/GroupsPage";
import CreateGroup from "./containers/group/group/CreateGroup";
import {Helmet} from "react-helmet";
import TestComponent from "./components/TestComponent";

function App() {
    library.add(faCheckSquare, faCoffee);
    return (
        /* <BrowserRouter>
             <BookMarkNavbar/>
             {/!*<CardsPage/>*!/}
             {/!*<LoginForm/>*!/}
         </BrowserRouter>*/

        <div className="container">

            <BookMarkNavbar/>
            <div className="container invisible"></div>
            <div className="container invisible"></div>
            <div className="container invisible"></div>


            {/*
            <GroupsPage/>
*/}
            {/*<Layout>*/}

            {/*for auth component use below*/}
            <Switch>
                <Route path="/newGroup" component={CreateGroup}/>
                {/*
                    <Route path="/orders" component={Orders} />
*/}
                <Route path="/auth" exact component={Auth}/>
                <Route path="/" exact component={GroupsPage}/>
                <Route path="/test" exact component={TestComponent}/>
            </Switch>
        </div>
    );
}

export default App;
