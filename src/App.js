import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import StockDetail from "./Route/StockDetail";
import MainContent from "./Route/MainContent";
import Header from "./Route/Header";
import "./Assets/Styles/normalize.css";
import "./Assets/Styles/style.css";
import SearchBar from "./Component/SearchBar";
import SearchBarButton from "./Component/SearchBarButton";

function App() {
    const [userInput, setuserInput] = useState("");
    const inputStorage = localStorage.getItem("userInput");

    const inputHandler = (e) => {
        setuserInput(e.target.value);
    };

    const handleSubmit = () => {
        localStorage.setItem("userInput", userInput.toUpperCase());
        document.getElementById("searchButton").click();
        window.location.reload();
    };

    return (
        <Router>
            <div className="app">
                <Header />
                
                <Switch>
                    {/* Route - Home */}
                    <Route exact path="/">
                        <MainContent>
                            <SearchBar
                                userInput={userInput}
                                inputHandle={inputHandler}
                                handleSubmit={handleSubmit} />
                            <SearchBarButton />
                        </MainContent>

                    </Route>
                    {/* Route - Stock details page */}
                    <Route path="/stockdetail">
                        <StockDetail userInput={inputStorage} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
