import React from 'react';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import CardsPage from "./containers/cardspage/CardsPage";
import {BrowserRouter} from "react-router-dom";
import BookMarkNavbar from "./components/navbar/BookMarkNavbar";
import LoginForm from "./containers/login/LoginForm";

function App() {
    library.add(faCheckSquare, faCoffee);
    return (
        <BrowserRouter>
            <BookMarkNavbar/>
            {/*<CardsPage/>*/}
            {/*<LoginForm/>*/}
        </BrowserRouter>
    );
}

export default App;
