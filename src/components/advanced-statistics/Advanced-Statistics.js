import React from 'react';
import './Advanced-Statistic.css'
import Card from "../cards/Card";
import Separator from "../separator/Separator";
import Picture1 from "./theImg/icon-brand-recognition.svg"
import Picture2 from "./theImg/icon-detailed-records.svg"
import Picture3 from "./theImg/icon-fully-customizable.svg"


function AdvancedStatistics() {
    return (
        <div className="AdvancedStatistics flex flex-col justify-center h-192 w-full p-8 box-border">
            <div className="input block">
            {/*input*/}
            {/*tablica inputu*/}
            </div>
            <div className="flex justify-start flex-col p-0">
                <h4 className="title-statistics text-3xl flex self-center m-0">Advanced Statistics</h4>
                <p className="description-statistics text-xl flex self-center m-0 w-3/5 text-center leading-6">Trac how your links are performing across our advanced statistics dashboard.</p>
            </div>
            <div className="cards flex relative justify-center h-1/2 p-10">
                <Card image={Picture1}/>
                <Separator />
                <Card image={Picture2}/>
                <Separator />
                <Card image={Picture3}/>
            </div>
        </div>
    )
}

export default AdvancedStatistics;
