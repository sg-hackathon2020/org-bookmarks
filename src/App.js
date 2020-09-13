import React from 'react';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {Route, Switch} from 'react-router-dom';
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


            {/*
            <GroupsPage/>
*/}
            {/*<Layout>*/}

            {/*for auth component use below*/}
            <Switch>

                <Route path="/groups/new" component={CreateGroup}/>
                {/*
                    <Route path="/orders" component={Orders} />
*/}
                <Route path="/auth" exact component={Auth}/>
                <Route path="/groups" exact component={GroupsPage}/>
                <Route path="/test" exact component={TestComponent}/>
                <Route path="/card-create/:groupId" exact component={CreateCard}/>
                <Route path="/groups/:id" exact component={TestComponent2}/>
                <Route path="/card-update/:groupId/:cardId" component={UpdateCard}/>
                <Route path="/cards-page/:groupId" component={CardsPage}/>
            </Switch>
        </div>
    );
}

export default App;
