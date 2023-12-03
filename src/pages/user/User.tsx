import "./user.scss";
import {Single} from "../../Companents/Single/Single.tsx";
import {singleUser} from "../../data.ts";

export const User = () => {

    // fetch data and send to Single Component
    return (
        <div className="user">
            <Single {...singleUser}/>
        </div>
    )
}