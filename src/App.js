import React, {useState} from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import AdvancedStatistics from "./components/advanced-statistics/Advanced-Statistics";
import Login from "./components/login/Login";



function App() {

    const [ route, setRoute ]= useState(false);

    function switchLogin (value) {
        setRoute(value);
        console.log('test')
    }

    return (
        <div>
            {route && <Login switchLogin={switchLogin} />}
            <Nav switchLogin={switchLogin} />
            <Article switchLogin={switchLogin} />
            <AdvancedStatistics />
        </div>
    );
}

export default App;
