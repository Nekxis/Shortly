import React, {useState} from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import AdvancedStatistics from "./components/advanced-statistics/Advanced-Statistics";



function App() {
    const {route ,setRoute} = useState('home');
  return (
    <div>
        <Nav isLogin ={route} />
        <Article />
        <AdvancedStatistics />
    </div>
  );
}

export default App;
