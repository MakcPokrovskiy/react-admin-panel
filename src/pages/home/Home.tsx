//style
import './home.scss';
//Components
import {HomeTopBox} from "../../Companents/HomeTopBox/HomeTopBox.tsx";
import {ChartBox} from "../../Companents/ChartBox/ChartBox.tsx";
import {chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from "../../data.ts";

export const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <HomeTopBox/>
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser}/>
            </div>
            <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
            <div className="box box4">4</div>
            <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
            <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
            <div className="box box7">7</div>
            <div className="box box8">8</div>
            <div className="box box9">9</div>
        </div>
    )
}