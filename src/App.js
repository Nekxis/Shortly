import React, {useState} from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import AdvancedStatistics from "./components/advanced-statistics/Advanced-Statistics";
import Login from "./components/login/Login";



function App() {

    const [ route, setRoute ]= useState(true);

    function login () {
        if (route === true) {
            return <Login />
        }
    }

    return (
        <div>
            {login()}
            <Nav />
            <Article />
            <AdvancedStatistics />
        </div>
    );
}

export default App;
