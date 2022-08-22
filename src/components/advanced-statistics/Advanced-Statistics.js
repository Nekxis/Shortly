import React from 'react';
import './Advanced-Statistic.css'
import Card from "../cards/Card";
import Separator from "../separator/Separator";
import Picture1 from "./theImg/icon-brand-recognition.svg"
import Picture2 from "./theImg/icon-detailed-records.svg"
import Picture3 from "./theImg/icon-fully-customizable.svg"


function AdvancedStatistics() {
    return (
        <div className="AdvancedStatistics flex flex-col justify-center h-256 w-full p-8 box-border">
            <div className="input block">
            {/*input*/}
            {/*tablica inputu*/}
            </div>
            <div className="flex justify-start  flex-col px-56 py-10">
                <h4 className="title-statistics text-3xl flex self-center m-0">Advanced Statistics</h4>
                <p className="description-statistics text-xl leading-relaxed flex self-center m-0 w-3/5 text-center leading-6">Trac how your links are performing across our advanced statistics dashboard.</p>
            </div>
            <div className="cards flex relative justify-center h-2/5 px-5 py-12">
                <Card
                    align={`self-start`}
                    image={Picture1}
                    title={`Brand Recognition`}
                    major={`Boost your brand recognition witch each click. Generic link don't mean a thing. Branded links help instill confidence in your content.`}
                />
                <Separator />
                <Card
                    align={`self-center`}
                    image={Picture2}
                    title={`Detailed records`}
                    major={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
                />
                <Separator />
                <Card
                    align={`self-end`}
                    image={Picture3}
                    title={`Fully Customizable`}
                    major={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}
                />
            </div>
        </div>
    )
}

export default AdvancedStatistics;
