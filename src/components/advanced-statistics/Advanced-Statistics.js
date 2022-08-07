import React from 'react';
import './Advanced-Statistic.css'

function AdvancedStatistics() {
    return (
        <div className="AdvancedStatistics flex justify-center w-full p-8 box-border">
            <div className="input">
            {/*input*/}
            {/*tablica inputu*/}
            </div>
            <div className="flex justify-start flex-col p-0">
                <h4 className="title-statistics flex self-center m-0">Advanced Statistics</h4>
                <p className="description-statistics flex self-center m-0 w-3/5 text-center leading-4">Trac how your links are performing across our advanced statistics dashboard.</p>
            </div>
            <div className="cards"></div>
        </div>
    )
}

export default AdvancedStatistics;
