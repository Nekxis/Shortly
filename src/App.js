import React, {useState} from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import AdvancedStatistics from "./components/advanced-statistics/Advanced-Statistics";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import PreFooter from "./components/pre footer/PreFooter";
import Footer from "./components/footer/Footer";



function App() {

    const [ login, setLogin ] = useState(false);
    const [ register, setRegister ] = useState(false);

    function switchLogin (value) {
        setLogin(value);
    }

    function switchRegister (value) {
        setRegister(value);
    }

    return (
        <div>
            {login && <Login switchLogin={switchLogin} />}
            {register && <Register switchRegister={switchRegister} />}
            <Nav switchLogin={switchLogin} switchRegister={switchRegister} />
            <Article switchRegister={switchRegister} />
            <AdvancedStatistics />
            <PreFooter switchRegister={switchRegister} />
            <Footer />
        </div>
    );
}

export default App;
