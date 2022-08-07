import React from 'react';
import './App.css';
import Nav from "./components/nav/Nav";
import Article from "./components/article/Article";
import AdvancedStatistics from "./components/advanced-statistics/Advanced-Statistics";



function App() {
  return (
    <div>
        <Nav />
        <Article />
        <AdvancedStatistics />
    </div>
  );
}

export default App;
