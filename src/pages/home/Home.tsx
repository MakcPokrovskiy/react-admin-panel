//style
import './home.scss';
//Components
import {HomeTopBox} from "../../Companents/HomeTopBox/HomeTopBox.tsx";
import {ChartBox} from "../../Companents/ChartBox/ChartBox.tsx";
import {BarChartBox} from "../../Companents/BarChartBox/BarChartBox.tsx";
import {PieChartBox} from "../../Companents/PieChartBox/PieChartBox.tsx";
import {BigChartBox} from "../../Companents/BigChartBox/BigChartBox.tsx";

//charts
import {
    barChartBoxRevenue,
    barChartBoxVisit,
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser
} from "../../data.ts";


export const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <HomeTopBox/>
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4"><PieChartBox/></div>
            <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box7"><BigChartBox/></div>
            <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
            <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
        </div>
    )
}